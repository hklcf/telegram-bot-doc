# InlineQueryResultCachedVoice

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InlineQueryResultCachedVoice](../../api.md#inlinequeryresultcachedvoice).

Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the voice message.

|Field|Type|Description|
|-----------|
|type|String|Type of the result, must be *voice*|
|id|String|Unique identifier for this result, 1-64 bytes|
|voice_file_id|String|A valid file identifier for the voice message|
|title|String|Voice message title|
|caption|String|*Optional*. Caption, 0-1024 characters after entities parsing|
|parse_mode|String|*Optional*. Mode for parsing entities in the voice message caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|reply_markup|[InlineKeyboardMarkup](./inlinekeyboardmarkup.md)|*Optional*. [Inline keyboard](../../features.md#inline-keyboards) attached to the message|
|input_message_content|[InputMessageContent](./inputmessagecontent.md)|*Optional*. Content of the message to be sent instead of the voice message|
