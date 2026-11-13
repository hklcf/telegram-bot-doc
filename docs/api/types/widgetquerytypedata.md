# WidgetQueryTypeData

> Part of the [Telegram Bot API](../../api.md). Canonical location: [WidgetQueryTypeData](../../api.md#widgetquerytypedata).

The query contains data for the bot.

|Field|Type|Description|
|-----------|
|type|String|Type of the query, always "data"|
|wallet_card|[TonWalletCard](./tonwalletcard.md)|*Optional*. TON wallet card of the user who sent the query, if it was sent to the bot along with the query|
