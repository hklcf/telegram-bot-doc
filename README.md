# telegram-bot-doc

Telegram Bot 官方文檔（<https://core.telegram.org/bots>）嘅**離線 markdown 副本**，
打包成一個 AI agent skill，每日由 GitHub Actions 自動同步。

- **645+ 頁**官方文檔：`Bot API` 每個 method 同每個 type 都有獨立檔案，
  另有 features / Mini Apps / payments / webhooks / passport / stickers / FAQ / changelog。
- **零依賴**抓取器：Telegram 每頁都提供機器可讀嘅 markdown（`<page>.md`），唔使爬 HTML。
- **自動更新**：GitHub Actions 每日跑抓取器，有變更就自動開 PR。

> ⚠️ **Unofficial mirror.** 本 repo 嘅 `docs/` 係 <https://core.telegram.org/bots> 嘅**原樣鏡像**，
> 版權屬 Telegram FZ-LLC，唔受本 repo 嘅 MIT license 涵蓋（見 [docs/LICENSE](docs/LICENSE)）。
> 一切以官方版本為準。


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

會重新抓取 `core.telegram.org`、重寫 `docs/`、檢查所有相對連結仲生成 `docs/README.md`。

### 直接睇文檔

```
docs/api.md                     Bot API 總覽 + 全部 method
docs/api/methods/sendmessage.md 單一 method 嘅參數表
docs/api/types/message.md       單一 type 嘅欄位表
docs/README.md                   全部頁面索引
```

## 結構

```
SKILL.md              skill 入口（給 AI 睇嘅使用指南）
docs/                 官方文檔副本（自動生成，唔好手改）
  README.md                    自動生成嘅全頁索引
  SOURCE.json         來源 + 頁數（抓取時間見 Git 提交紀錄）
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

| 部分 | 授權 |
|---|---|
| `scripts/`、`.github/`、`SKILL.md`、`README.md`、`package.json` | **MIT**（見 [LICENSE](LICENSE)，範圍有註明） |
| `docs/`（645 頁官方文檔鏡像） | **唔授權** — 版權屬 Telegram FZ-LLC，見 [docs/LICENSE](docs/LICENSE) |

點解唔可以全 repo 都 MIT：MIT 係聲明「我係版權擁有人並授權」。你對 `docs/` 唔係版權擁有人，
所以嗰個授權對佢無效。所以做法係 **MIT 標明範圍 + `docs/` 另放 Telegram 聲明**。

### Telegram 條款

睇過官方條款，呢個 skill 嘅用途冇問題：

- [Bot Developer Terms §8](https://telegram.org/tos/bot-developers)：
  "Telegram retains ownership over the code and functionality of the Telegram apps, its code,
  trademarks, servers, architecture, protocols and APIs." → 文檔版權屬 Telegram（所以上面咁授權）。
- [Content Licensing and AI Scraping Terms](https://telegram.org/tos/content-licensing)：
  禁止嘅係攞**用戶生成內容**（chat / channel / post）去 train / fine-tune / benchmark / deploy AI。
  官方**開發者文檔**唔屬用戶內容，而且 Telegram 故意提供機器可讀版本（每頁都寫住
  "Machine-readable version of this page: /bots.md"）—— 攞官方 API reference 嚟寫 bot，
  就係文檔本身嘅預定用途。
- `core.telegram.org` **冇 robots.txt**（404），即係冇機器可讀嘅抓取限制。

### Publishing options（公開 repo 嘅取捨）

`docs/` 係 Telegram 版權內容原樣再發佈，雖然實務上好多 community mirror 都咁做（好少被 takedown），
但 Telegram 有權要求移除。三個做法：

| 做法 | 優點 | 缺點 |
|---|---|---|
| **A. `docs/` 照 commit**（現時設定） | 用戶 clone 完即刻用 | 公開再發佈 645 頁版權內容，有 takedown 風險 |
| **B. `docs/` 唔 commit**，`.gitignore` 掉，改用 GitHub Release / Actions artifact 派發 | 公開 repo 只有你自己寫嘅 code（乾淨 MIT），風險最低 | 用戶要多行 `npm run update` 先有文檔 |
| **C. A + B 混合**：public repo 只留 code，docs 由 Actions 發 release asset | 平衡 | 多一份 CI 配置 |

**建議：如果呢個 repo 主要係俾你自己用、想喺 GitHub 保持乾淨 → 揀 B。**
如果要俾人 `git clone` 完即刻用 → 揀 A，但要接受 takedown 風險。

