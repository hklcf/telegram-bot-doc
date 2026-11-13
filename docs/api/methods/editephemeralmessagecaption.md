# editEphemeralMessageCaption

> Part of the [Telegram Bot API](../../api.md). Canonical location: [editEphemeralMessageCaption](../../api.md#editephemeralmessagecaption).

Use this method to edit the caption of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, *True* is returned.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target supergroup in the format `@username`|
|receiver_user_id|Integer|Yes|Identifier of the user who received the message|
|ephemeral_message_id|Integer|Yes|Identifier of the ephemeral message to edit|
|caption|String|Optional|New caption of the message, 0-1024 characters after entities parsing|
|parse_mode|String|Optional|Mode for parsing entities in the message caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](../types/messageentity.md)|Optional|A JSON-serialized list of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|show_caption_above_media|Boolean|Optional|Pass *True* if the caption must be shown above the message media. Supported only for animation, photo and video messages.|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md)|Optional|A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards)|
