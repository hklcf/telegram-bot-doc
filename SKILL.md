---
name: telegram-bot
description: Telegram Bot 官方文檔的離線 markdown 副本（來源 https://core.telegram.org/bots）。包含完整 Bot API（每個 method / type 都有獨立檔案，另有單一檔案嘅完整 API reference）、Bot features 詳細指南、Mini Apps / Web Apps、Inline mode、Payments / Telegram Stars、Webhooks、Games、Telegram Passport、Stickers、FAQ 同 API changelog。當用戶要寫或除錯 Telegram bot、查 Bot API endpoint / 參數 / 物件欄位、設定 webhook、處理 update、寫 inline query、做支付或訂閱、建立 Mini App、查 Bot API 版本變更時使用。Keywords — Telegram, Bot API, bot, botfather, sendMessage, getUpdates, setWebhook, Update, Message, InlineKeyboardMarkup, inline query, Mini App, Web App, Telegram Stars, TON, passport, webhook.
---

# Telegram Bot 官方文檔（離線副本）

本 skill 內含 [core.telegram.org/bots](https://core.telegram.org/bots) 官方文檔的完整 markdown 副本，
每日由 GitHub Action 自動同步（頁數見 `docs/SOURCE.json`，最後同步時間見 Git 提交紀錄）。

## 怎樣用

**1. 先睇索引。** `docs/README.md` 係自動生成嘅全頁索引（~645 頁），按目錄分組：

| 你想知 | 開呢個檔 |
|---|---|
| **一次過睇晒成個 API**（每個 method / type 都有標題、參數表、欄位表） | `docs/api.md` — 開頭係官方總覽（authorizing、making requests、getting updates…），之後係生成嘅完整 reference |
| 某個 method 嘅參數表（細啲、淨係嗰個） | `docs/api/methods/<method>.md`（如 `sendmessage.md`、`getupdates.md`、`setwebhook.md`） |
| 某個 type 嘅欄位表（細啲、淨係嗰個） | `docs/api/types/<type>.md`（如 `message.md`、`update.md`、`inlinekeyboardmarkup.md`） |
| 全部 type 一覽 | `docs/api/types.md` |
| 訊息格式（bold/italic/code/link/blockquote…） | `docs/api/formatting.md` |
| Rich message（區塊、表格、幻燈片） | `docs/api/rich-messages.md` |
| 咩功能係 Telegram 有提供（AI bot、guest bot、topic、streaming…） | `docs/features.md` |
| Mini Apps / Web Apps | `docs/webapps.md` |
| Inline mode | `docs/inline.md` |
| 支付 / Telegram Stars / 訂閱 | `docs/payments.md`、`docs/payments-stars.md` |
| Webhook / self-signed cert | `docs/webhooks.md`、`docs/self-signed.md` |
| Games | `docs/games.md` |
| Telegram Passport | `docs/passport.md` |
| Sticker | `docs/stickers.md`、`docs/import-stickers.md` |
| 由 BotFather 到 Hello World 教學 | `docs/tutorial.md` |
| 常見問題（broadcast 限制、錯誤碼、bot 權限） | `docs/faq.md` |
| Bot API 版本變更歷史 | `docs/api-changelog.md` |
| 官方 sample code | `docs/samples.md`、`docs/samples/hellobot.md` |

**2. 檔名全部係小寫、無底線**：`sendMessage` → `docs/api/methods/sendmessage.md`，
`InlineKeyboardMarkup` → `docs/api/types/inlinekeyboardmarkup.md`。
唔記得 exact 名就 `rg -i "sendmessage" docs/api/types/` 咁樣 grep。

**3. 大檔案唔好成個讀。** `docs/api.md` 有 577 KB、`docs/features.md` 有 88 KB、
`docs/api-changelog.md` 有 185 KB —— 用 `rg` 定位，再用 `Read` 讀返嗰幾行。
要睇 method 參數表就直接讀 `docs/api/methods/<method>.md`（每個都係細檔）。

**4. 每個 method / type 頁頂部**都有一行 `> Part of the [Telegram Bot API](../../api.md). Canonical location: [...]`，
跳返 `docs/api.md` 就係嗰個 method / type 嘅完整段落。

## 常用重點

- **收 update 有兩招**：`getUpdates`（long polling）或 `setWebhook`（見 `docs/api/methods/setwebhook.md`）。
  唔可以同時用。支援嘅 update type 全部喺 `docs/api/types/update.md`。
- **`chat_id` 係 Integer 或 String**（`@channelusername`）。機器人入到 supergroup / channel 嘅
  條件同權限見 `docs/faq.md`。
- **所有 method 名同 type 名喺 Bot API 都係 case-insensitive**（`sendMessage` == `sendmessage`）。
- **Inline mode** 要先經 `setMyCommands` / `answerInlineQuery`，詳見 `docs/inline.md` 同
  `docs/api/methods/answerinlinequery.md`。
- **付款**：數碼商品用 Stars（`sendInvoice` + `XTR`），實體商品用 Telegram Payments
  （provider token）。見 `docs/payments.md`、`docs/payments-stars.md`。
- **格式**：預設淨文字，要 bold / italic 等要送 `parse_mode` 同 entities，選項見 `docs/api/formatting.md`。
- **Mini App** 由 `web_app` button 開，`WebApp` JS API 介面喺 `docs/webapps.md`。
- **版本對照**：睇 `docs/api-changelog.md` 最上面，先知道係邊個 Bot API 版本（例如 Bot API 10.x）。

## 更新文檔

```bash
npm run update        # 重新抓取 core.telegram.org，覆寫 docs/
```

抓取器 `scripts/update.mjs` 會跟住連結 crawl 晒 `/bots/**`（連 API 每個 method / type 頁），
自動做相對路徑重寫、斷鏈檢查同 `docs/README.md` 生成。
GitHub Actions 每朝自動跑，唔同就開 PR。

## 注意

- `docs/` 內嘅內容係 Telegram 官方文檔嘅**原樣副本**（英文），版權屬 Telegram。
- `docs/api.md` = 官方嘅精簡總覽 + 抓取器生成嘅完整 method/type reference。
  生成部分係因為 Telegram 嘅 `.md` 匯出冇每個 method 嘅標題，令各頁嘅
  `Canonical location` 連結跳唔到 —— 補返之後就跳得返。
- 少量頁面（`features.md`、`webapps.md` 等）仍然帶 raw HTML 嘅圖片 / 影片 block，
  內容冇問題但唔好當成 markdown 表格去解析。
- 有幾條官方自己嘅頁內跳轉連結係 stale（HTML 版有嗰個 section，但 `.md` 匯出冇），
  見到 broken anchor 唔好當成內容缺失。
- 本 skill 只覆蓋 **Bot API（HTTP）**。想寫 MTProto / TDLib client 要另外查 `core.telegram.org/api`。
