# InputTextMessageContent

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputTextMessageContent](../../api.md#inputtextmessagecontent).

Represents the [content](./inputmessagecontent.md) of a text message to be sent as the result of an inline query.

|Field|Type|Description|
|-----------|
|message_text|String|Text of the message to be sent, 1-4096 characters|
|parse_mode|String|*Optional*. Mode for parsing entities in the message text. See [formatting options](../formatting.md) for more details.|
|entities|Array of [MessageEntity](./messageentity.md)|*Optional*. List of special entities that appear in message text, which can be specified instead of *parse_mode*|
|link_preview_options|[LinkPreviewOptions](./linkpreviewoptions.md)|*Optional*. Link preview generation options for the message|
