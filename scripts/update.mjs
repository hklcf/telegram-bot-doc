#!/usr/bin/env node
// Mirror the official Telegram Bot documentation into docs/.
//
// Telegram publishes a machine-readable markdown version of every docs page at
// <page>.md (linked from each page as <link rel="alternate" type="text/markdown">),
// so no HTML scraping is needed.
//
//   node scripts/update.mjs
//
// Writes: docs/**.md, docs/README.md, docs/SOURCE.json
import { mkdir, writeFile, rm, readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, posix } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://core.telegram.org";
const OUT = join(fileURLToPath(new URL("..", import.meta.url)), "docs");
const CONCURRENCY = 6;

// Bot-related pages that live outside the /bots/ section.
const EXTRA_PAGES = new Set([
  "/passport",
  "/stickers",
  "/import-stickers",
  "/widgets/login",
  "/api/url-authorization",
]);

// Entry points for the crawl. Everything else is discovered through links.
const SEEDS = [
  "/bots",
  "/bots/api",
  "/bots/api/types",
  "/bots/api/formatting",
  "/bots/api/rich-messages",
  "/bots/api-changelog",
  ...EXTRA_PAGES,
];

// A page has no file extension once '.md' is stripped (assets like
// /bots/payments/currencies.json are files, not pages).
const isPage = (p) =>
  !/\.[a-z0-9]+$/i.test(p) &&
  (p === "/bots" || p.startsWith("/bots/") || EXTRA_PAGES.has(p));

const mdUrl = (page) => `${ORIGIN}${page}.md`;

const DOCS_LICENSE = `The files in this directory are an unofficial, verbatim mirror of the Telegram Bot
documentation published at ${ORIGIN}/bots

    Copyright © Telegram FZ-LLC / Telegram Messenger Inc. All rights reserved.

These files are NOT covered by the MIT license of this repository. They are
included so that AI coding assistants can consult the official Bot API
reference offline, and for no other purpose. No license to them is granted
here by the maintainers of this repository, who do not hold the copyright.

The authoritative version of this content, and the only version that carries
Telegram's own terms, is:

    ${ORIGIN}/bots

Telegram's Terms of Service for Bot Platform Developers
(https://telegram.org/tos/bot-developers) state that "Telegram retains
ownership over the code and functionality of the Telegram apps, its code,
trademarks, servers, architecture, protocols and APIs".

If you want to redistribute this material, read the "Publishing options"
section of the repository README first -- the maintainers' recommendation is to
not commit \`docs/\` to a public repository at all, and to let the automated
sync produce it locally or as a release artifact instead.
`;

/** '/bots/api#sendmessage' -> { path: '/bots/api', anchor: '#sendmessage' } */
function splitTarget(raw) {
  const t = raw.trim();
  const hash = t.indexOf("#");
  return {
    path: hash === -1 ? t : t.slice(0, hash),
    anchor: hash === -1 ? "" : t.slice(hash),
  };
}

/** '/bots/api/methods/sendmessage.md' -> '/bots/api/methods/sendmessage' */
const toPage = (path) =>
  (path.endsWith(".md") ? path.slice(0, -3) : path).replace(/\/+$/, "");

/**
 * page -> file inside docs/.
 * The '/bots' section is the doc root, so '/bots' -> index.md and
 * '/bots/api/methods/sendmessage' -> api/methods/sendmessage.md
 */
function toFile(page) {
  const p = toPage(page).replace(/^\/+|\/+$/g, "");
  if (p === "bots") return "index.md";
  const rel = p.startsWith("bots/") ? p.slice("bots/".length) : p;
  return `${rel}.md`;
}

async function fetchPage(page) {
  const url = mdUrl(page);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "user-agent": "telegram-bot-doc-skill (+https://core.telegram.org/bots)" },
        signal: AbortSignal.timeout(45_000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { page, body: await res.text() };
    } catch (err) {
      if (attempt === 2) throw new Error(`${url}: ${err.message}`);
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }
}

async function pool(items, worker, size = CONCURRENCY) {
  const results = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      while (i < items.length) results.push(await worker(items[i++]));
    }),
  );
  return results;
}

/** All page links in a page body: markdown links + html href/src. Images are skipped. */
function findLinks(body) {
  const out = [];
  for (const m of body.matchAll(/(!?)\[[^\]]*\]\(\s*([^)\s]+)/g)) {
    if (m[1] !== "!") out.push(m[2]);
  }
  for (const m of body.matchAll(/(?:href|src)\s*=\s*"([^"]*)"/g)) out.push(m[1]);
  return out;
}

/**
 * Resolve a link target the way a browser would, relative to the page it sits on.
 * Returns null for links that leave the site (external scheme or pure anchor).
 */
function resolveTarget(fromPage, raw) {
  const { path, anchor } = splitTarget(raw);
  if (!path) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return null;
  if (/[{}]/.test(path)) return null; // template placeholder, e.g. /bots/{script_url}
  const abs = path.startsWith("/")
    ? posix.normalize(path)
    : posix.normalize(posix.join(posix.dirname(fromPage), path));
  return { page: toPage(abs), path: abs, anchor };
}

// --- discovery -----------------------------------------------------------------

const bodies = new Map();
const discovered = new Set(SEEDS);
let level = [...SEEDS];

while (level.length) {
  const fetched = await pool(level, fetchPage);
  const next = [];
  for (const { page, body } of fetched) {
    bodies.set(page, body);
    for (const link of findLinks(body)) {
      const target = resolveTarget(page, link);
      if (!target || !isPage(target.page) || discovered.has(target.page)) continue;
      discovered.add(target.page);
      next.push(target.page);
    }
  }
  level = next;
  console.log(`fetched ${bodies.size}/${discovered.size} pages`);
}

// --- rewrite -------------------------------------------------------------------

/** Local relative link from the current page to the target page. */
function relLink(fromFile, toFile, anchor) {
  const rel = posix.relative(posix.dirname(fromFile), toFile) || posix.basename(toFile);
  const path = rel.startsWith(".") ? rel : `./${rel}`;
  return `${path}${anchor}`;
}

/**
 * Rewrite links:
 *  - links to pages we mirrored  -> relative path inside docs/
 *  - links to anything else      -> absolute https://core.telegram.org/...
 */
function rewrite(body, fromPage, fromFile, pageToFile) {
  const fix = (target, isImage = false) => {
    const resolved = resolveTarget(fromPage, target);
    if (!resolved) return target;
    if (isImage) {
      // Images never point at doc pages; only make root-relative ones absolute.
      return resolved.path.startsWith("/") ? `${ORIGIN}${resolved.path}${resolved.anchor}` : target;
    }
    const file = pageToFile.get(resolved.page);
    if (file) return relLink(fromFile, file, resolved.anchor);
    if (resolved.path.startsWith("/")) return `${ORIGIN}${resolved.path}${resolved.anchor}`;
    return target;
  };

  return body
    .replace(
      /(!?)\[([^\]]*)\]\(\s*([^)\s]+)([^)]*)\)/g,
      (_, bang, text, target, rest) => `${bang}[${text}](${fix(target, bang === "!")}${rest})`,
    )
    .replace(/(href|src)\s*=\s*"([^"]*)"/g, (_, attr, t) => `${attr}="${fix(t)}"`);
}

// --- write ---------------------------------------------------------------------

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const pageToFile = new Map([...bodies.keys()].map((p) => [p, toFile(p)]));
const index = [];

for (const [page, body] of bodies) {
  const file = toFile(page);
  const outPath = join(OUT, file);
  await mkdir(dirname(outPath), { recursive: true });
  const text = rewrite(body, page, file, pageToFile);
  await writeFile(outPath, text, "utf8");
  const title = (text.match(/^#\s+(.+)$/m) || [, page])[1].trim();
  index.push({ file, page, title });
}

index.sort((a, b) => a.file.localeCompare(b.file));

// Guard: two mirrored pages must never collide on a case-insensitive filesystem
// (Windows/macOS). 'docs/README.md' and 'docs/readme.md' would be one file there.
const seenLower = new Map();
for (const row of [...index.map((r) => r.file), "README.md", "LICENSE"]) {
  const key = row.toLowerCase();
  if (seenLower.has(key)) {
    throw new Error(`case-insensitive file collision: ${seenLower.get(key)} vs ${row}`);
  }
  seenLower.set(key, row);
}

const groups = new Map();
for (const row of index) {
  const dir = posix.dirname(row.file);
  const g = dir === "." ? "(root)" : dir;
  if (!groups.has(g)) groups.set(g, []);
  groups.get(g).push(row);
}

const indexMd = [
  "# Telegram Bot Docs — file index",
  "",
  `Auto-generated by \`scripts/update.mjs\`. ${index.length} pages. See \`SOURCE.json\` for the fetch time.`,
  "",
  "All links below are relative to this file.",
  "",
  ...[...groups.entries()].flatMap(([g, rows]) => [
    `## ${g}`,
    "",
    ...rows.map((r) => `- [${r.title}](${r.file})`),
    "",
  ]),
].join("\n");
// README.md, not INDEX.md: 'docs/index.md' is already the mirror of /bots.
await writeFile(join(OUT, "README.md"), indexMd, "utf8");

// No timestamp here on purpose: a timestamp would make every daily sync look
// like a change and the bot would open a PR every single day. The fetch time
// is printed to stdout (CI job summary) and lives in git history.
await writeFile(
  join(OUT, "SOURCE.json"),
  JSON.stringify({ origin: ORIGIN, pages: index.length }, null, 2) + "\n",
  "utf8",
);

// The mirrored content is Telegram's copyright; it is not covered by this
// repo's MIT license. Written here so a full rebuild of docs/ keeps it.
await writeFile(join(OUT, "LICENSE"), DOCS_LICENSE, "utf8");

// --- sanity check ---------------------------------------------------------------

const required = [
  "index.md",
  "README.md",
  "api.md",
  "api/types.md",
  "api/formatting.md",
  "api/methods/sendmessage.md",
  "api/types/message.md",
  "api/types/update.md",
  "features.md",
  "webapps.md",
  "faq.md",
  "api-changelog.md",
];
const present = new Set(
  (await readdir(OUT, { recursive: true }))
    .map((e) => String(e).replaceAll("\\", "/"))
    .filter((e) => e.endsWith(".md")),
);
const missing = required.filter((f) => !present.has(f));
if (missing.length) throw new Error(`missing expected docs: ${missing.join(", ")}`);

for (const row of index) {
  const body = await readFile(join(OUT, row.file), "utf8");
  if (body.trim().length < 40) throw new Error(`suspiciously empty: ${row.file}`);
}

// Every relative link must resolve to a file we actually mirrored.
let broken = 0;
for (const row of index) {
  const body = await readFile(join(OUT, row.file), "utf8");
  for (const m of body.matchAll(/(!?)\[[^\]]*\]\(\s*([^)\s]+)/g)) {
    if (m[1] === "!") continue;
    const target = m[2];
    if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("#")) continue;
    if (/[{}]/.test(target)) continue; // template placeholder
    const path = join(OUT, posix.dirname(row.file), target.split("#")[0]);
    try {
      await stat(path);
    } catch {
      broken++;
      if (broken <= 10) console.error(`broken link: ${row.file} -> ${target}`);
    }
  }
}
if (broken) throw new Error(`${broken} broken relative links`);

console.log(`wrote ${index.length} pages to docs/`);
console.log(`fetched at ${new Date().toISOString()}`);
