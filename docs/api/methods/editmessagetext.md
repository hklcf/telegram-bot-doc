# editMessageText

> Part of the [Telegram Bot API](../../api.md). Canonical location: [editMessageText](../../api.md#editmessagetext).

Use this method to edit text, rich and [game](../../api.md#games) messages. On success, if the edited message is not an inline message, the edited [Message](../types/message.md) is returned, otherwise *True* is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.

|Parameter|Type|Required|Description|
|-----------|
|business_connection_id|String|Optional|Unique identifier of the business connection on behalf of which the message to be edited was sent|
|chat_id|Integer or String|Optional|Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target bot, supergroup, or channel in the format `@username`.|
|message_id|Integer|Optional|Required if *inline_message_id* is not specified. Identifier of the message to edit.|
|inline_message_id|String|Optional|Required if *chat_id* and *message_id* are not specified. Identifier of the inline message.|
|text|String|Optional|New text of the message, 1-4096 characters after entity parsing; required if *rich_message* isn't specified|
|parse_mode|String|Optional|Mode for parsing entities in the message text. See [formatting options](../formatting.md) for more details.|
|entities|Array of [MessageEntity](../types/messageentity.md)|Optional|A JSON-serialized list of special entities that appear in message text, which can be specified instead of *parse_mode*|
|link_preview_options|[LinkPreviewOptions](../types/linkpreviewoptions.md)|Optional|Link preview generation options for the message|
|rich_message|[InputRichMessage](../types/inputrichmessage.md)|Optional|New rich content of the message; required if *text* isn't specified. Direct upload of new files and explicit upload of files by a URL isn't supported when an inline message is edited.|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md)|Optional|A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards)|
