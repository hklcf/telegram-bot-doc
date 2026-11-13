# editMessageCaption

> Part of the [Telegram Bot API](../../api.md). Canonical location: [editMessageCaption](../../api.md#editmessagecaption).

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](../types/message.md) is returned, otherwise *True* is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.

|Parameter|Type|Required|Description|
|-----------|
|business_connection_id|String|Optional|Unique identifier of the business connection on behalf of which the message to be edited was sent|
|chat_id|Integer or String|Optional|Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target bot, supergroup, or channel in the format `@username`.|
|message_id|Integer|Optional|Required if *inline_message_id* is not specified. Identifier of the message to edit.|
|inline_message_id|String|Optional|Required if *chat_id* and *message_id* are not specified. Identifier of the inline message.|
|caption|String|Optional|New caption of the message, 0-1024 characters after entities parsing|
|parse_mode|String|Optional|Mode for parsing entities in the message caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](../types/messageentity.md)|Optional|A JSON-serialized list of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|show_caption_above_media|Boolean|Optional|Pass *True* if the caption must be shown above the message media. Supported only for animation, photo and video messages.|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md)|Optional|A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards)|
