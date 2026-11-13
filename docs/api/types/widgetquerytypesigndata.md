# WidgetQueryTypeSignData

> Part of the [Telegram Bot API](../../api.md). Canonical location: [WidgetQueryTypeSignData](../../api.md#widgetquerytypesigndata).

The query contains data signed by a TON wallet of the user who sent the query. The data is signed for the domain `bot<bot_id>`, where `<bot_id>` is the identifier of the bot.

|Field|Type|Description|
|-----------|
|type|String|Type of the query, always "sign_data"|
|wallet|[WidgetQueryWallet](./widgetquerywallet.md)|The wallet that signed the data|
|sign_data|String|JSON-serialized signed data|
