# telegram-bot-doc

Telegram Bot 官方文檔（<https://core.telegram.org/bots>）嘅**離線 markdown 副本**，
打包成一個 AI agent skill，每日由 GitHub Actions 自動同步。

- **645+ 頁**官方文檔：`Bot API` 每個 method 同每個 type 都有獨立檔案，
  另有 features / Mini Apps / payments / webhooks / passport / stickers / FAQ / changelog。
- **零依賴**抓取器：Telegram 每頁都提供機器可讀嘅 markdown（`<page>.md`），唔使爬 HTML。
- **自動更新**：GitHub Actions 每日跑抓取器，有變更就自動開 PR。

## 用法

### 安裝成 opencode skill

```bash
git clone https://github.com/<your-user>/telegram-bot-doc \
  ~/.config/opencode/skills/telegram-bot
```

然後喺 opencode 入面直接問 Telegram bot 相關問題，skill 會自動載入。

> opencode 讀 skill 目錄：`~/.config/opencode/skills/`（見 `opencode.jsonc` 嘅 `skills.paths`）。

### 本地更新

```bash
npm run update
```

會重新抓取 `core.telegram.org`、重寫 `docs/`、檢查所有相對連結仲生成 `docs/INDEX.md`。

### 直接睇文檔

```
docs/api.md                     Bot API 總覽 + 全部 method
docs/api/methods/sendmessage.md 單一 method 嘅參數表
docs/api/types/message.md       單一 type 嘅欄位表
docs/INDEX.md                   全部頁面索引
```

## 結構

```
SKILL.md              skill 入口（給 AI 睇嘅使用指南）
docs/                 官方文檔副本（自動生成，唔好手改）
  INDEX.md            自動生成嘅全頁索引
  SOURCE.json         抓取時間 / 頁數
scripts/update.mjs    抓取 + 重寫 + 檢查
.github/workflows/    自動更新 workflow
```

`docs/` 完全由 `scripts/update.mjs` 生成。要改內容請改抓取器，唔好直接改 `docs/`。

## 點樣更新

| 觸發 | 行為 |
|---|---|
| 每日 cron（04:17 UTC） | 抓取 → 有變更就開 PR（`chore/update-docs`） |
| 手動 | Actions 頁面按 **Run workflow** |
| 本地 | `npm run update` |

PR 會列出每個檔案嘅改動，方便 review 官方文檔有咩新變化。

## 覆蓋範圍

Bot API（HTTP）為主：

- `/bots/**` — 全部 bot 文檔，包括 `api/methods/*`、`api/types/*`
- `/passport`、`/stickers`、`/import-stickers`、`/widgets/login`、`/api/url-authorization`
  （bot 文檔直接引用嘅相關頁）

**未覆蓋**：MTProto / TDLib API（`/api/**`）、Telegram client source code。

## 授權

- 本 repo 嘅程式碼：`MIT`（見 [LICENSE](LICENSE)）
- `docs/` 入面嘅文檔內容：**版權屬 Telegram**。呢度只係作教育／離線查閱用途嘅鏡像，
  一切以 <https://core.telegram.org/bots> 官方版本為準。
