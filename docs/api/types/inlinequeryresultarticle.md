# InlineQueryResultArticle

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InlineQueryResultArticle](../../api.md#inlinequeryresultarticle).

Represents a link to an article or web page.

|Field|Type|Description|
|-----------|
|type|String|Type of the result, must be *article*|
|id|String|Unique identifier for this result, 1-64 Bytes|
|title|String|Title of the result|
|input_message_content|[InputMessageContent](./inputmessagecontent.md)|Content of the message to be sent|
|reply_markup|[InlineKeyboardMarkup](./inlinekeyboardmarkup.md)|*Optional*. [Inline keyboard](../../features.md#inline-keyboards) attached to the message|
|url|String|*Optional*. URL of the result|
|description|String|*Optional*. Short description of the result|
|thumbnail_url|String|*Optional*. Url of the thumbnail for the result|
|thumbnail_width|Integer|*Optional*. Thumbnail width|
|thumbnail_height|Integer|*Optional*. Thumbnail height|
