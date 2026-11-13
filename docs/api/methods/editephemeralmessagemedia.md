# editEphemeralMessageMedia

> Part of the [Telegram Bot API](../../api.md). Canonical location: [editEphemeralMessageMedia](../../api.md#editephemeralmessagemedia).

Use this method to edit the media of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, *True* is returned.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target supergroup in the format `@username`|
|receiver_user_id|Integer|Yes|Identifier of the user who received the message|
|ephemeral_message_id|Integer|Yes|Identifier of the ephemeral message to edit|
|media|[InputMedia](../types/inputmedia.md)|Yes|A JSON-serialized object for the new media content of the message|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md)|Optional|A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards)|
