# InlineQueryResultCachedSticker

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InlineQueryResultCachedSticker](../../api.md#inlinequeryresultcachedsticker).

Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the sticker.

|Field|Type|Description|
|-----------|
|type|String|Type of the result, must be *sticker*|
|id|String|Unique identifier for this result, 1-64 bytes|
|sticker_file_id|String|A valid file identifier of the sticker|
|reply_markup|[InlineKeyboardMarkup](./inlinekeyboardmarkup.md)|*Optional*. [Inline keyboard](../../features.md#inline-keyboards) attached to the message|
|input_message_content|[InputMessageContent](./inputmessagecontent.md)|*Optional*. Content of the message to be sent instead of the sticker|
