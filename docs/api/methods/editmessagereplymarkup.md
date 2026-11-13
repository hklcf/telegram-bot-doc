# editMessageReplyMarkup

> Part of the [Telegram Bot API](../../api.md). Canonical location: [editMessageReplyMarkup](../../api.md#editmessagereplymarkup).

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](../types/message.md) is returned, otherwise *True* is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.

|Parameter|Type|Required|Description|
|-----------|
|business_connection_id|String|Optional|Unique identifier of the business connection on behalf of which the message to be edited was sent|
|chat_id|Integer or String|Optional|Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target bot, supergroup, or channel in the format `@username`.|
|message_id|Integer|Optional|Required if *inline_message_id* is not specified. Identifier of the message to edit.|
|inline_message_id|String|Optional|Required if *chat_id* and *message_id* are not specified. Identifier of the inline message.|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md)|Optional|A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards)|
