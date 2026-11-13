---
name: telegram-bot
description: Telegram Bot 官方文檔的離線 markdown 副本（source: https://core.telegram.org/bots）。包含完整 Bot API（每個 method / type 都有獨立檔案）、Bot features 詳細指南、Mini Apps / Web Apps、Inline mode、Payments / Telegram Stars、Webhooks、Games、Telegram Passport、Stickers、FAQ 同 API changelog。當用戶要寫或除錯 Telegram bot、查 Bot API endpoint / 參數 / 物件欄位、設定 webhook、處理 update、寫 inline query、做支付或訂閱、建立 Mini App、查 Bot API 版本變更時使用。Keywords: Telegram, Bot API, bot, botfather, sendMessage, getUpdates, setWebhook, Update, Message, InlineKeyboardMarkup, inline query, Mini App, Web App, Telegram Stars, TON, passport, webhook, MTProto bot.
---

# Telegram Bot 官方文檔（離線副本）

本 skill 內含 [core.telegram.org/bots](https://core.telegram.org/bots) 官方文檔的完整 markdown 副本，
每日由 GitHub Action 自動同步（見 `docs/SOURCE.json` 的 `fetchedAt`）。

## 怎樣用

**1. 先睇索引。** `docs/README.md` 係自動生成嘅全頁索引（~645 頁），按目錄分組：

| 你想知 | 開呢個檔 |
|---|---|
| Bot API 總覽 + 全部 method 一覽 | `docs/api.md` |
| 某個 method 嘅參數表 | `docs/api/methods/<method>.md`（如 `sendmessage.md`、`getupdates.md`、`setwebhook.md`） |
| 某個 type 嘅欄位表 | `docs/api/types/<type>.md`（如 `message.md`、`update.md`、`inlinekeyboardmarkup.md`） |
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

**3. 每個 method / type 頁頂部**都有一行 `> Part of the [Telegram Bot API](../../api.md). Canonical location: [...]`，
方便跳返總覽頁。

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
- 少量頁面（`features.md`、`webapps.md` 等）仍然帶 raw HTML 嘅圖片 / 影片 block，
  內容冇問題但唔好當成 markdown 表格去解析。
- 本 skill 只覆蓋 **Bot API（HTTP）**。想寫 MTProto / TDLib client 要另外查 `core.telegram.org/api`。
