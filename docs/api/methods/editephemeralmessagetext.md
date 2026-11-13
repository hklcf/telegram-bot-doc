# editEphemeralMessageText

> Part of the [Telegram Bot API](../../api.md). Canonical location: [editEphemeralMessageText](../../api.md#editephemeralmessagetext).

Use this method to edit an ephemeral text or rich message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, *True* is returned.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target supergroup in the format `@username`|
|receiver_user_id|Integer|Yes|Identifier of the user who received the message|
|ephemeral_message_id|Integer|Yes|Identifier of the ephemeral message to edit|
|text|String|Optional|New text of the message, 1-4096 characters after entity parsing; required if *rich_message* isn't specified|
|parse_mode|String|Optional|Mode for parsing entities in the message text. See [formatting options](../formatting.md) for more details.|
|entities|Array of [MessageEntity](../types/messageentity.md)|Optional|A JSON-serialized list of special entities that appear in message text, which can be specified instead of *parse_mode*|
|rich_message|[InputRichMessage](../types/inputrichmessage.md)|Optional|New rich content of the message; required if *text* isn't specified|
|link_preview_options|[LinkPreviewOptions](../types/linkpreviewoptions.md)|Optional|Link preview generation options for the message|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md)|Optional|A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards)|
