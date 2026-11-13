# WebAppData

> Part of the [Telegram Bot API](../../api.md). Canonical location: [WebAppData](../../api.md#webappdata).

Describes data sent from a [Web App](../../webapps.md) to the bot.

|Field|Type|Description|
|-----------|
|data|String|The data. Be aware that a bad client can send arbitrary data in this field.|
|button_text|String|Text of the *web_app* keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.|
