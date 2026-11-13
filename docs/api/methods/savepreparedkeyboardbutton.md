# savePreparedKeyboardButton

> Part of the [Telegram Bot API](../../api.md). Canonical location: [savePreparedKeyboardButton](../../api.md#savepreparedkeyboardbutton).

Stores a keyboard button that can be used by a user within a Mini App. Returns a [PreparedKeyboardButton](../types/preparedkeyboardbutton.md) object.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|Unique identifier of the target user that can use the button|
|button|[KeyboardButton](../types/keyboardbutton.md)|Yes|A JSON-serialized object describing the button to be saved. The button must be of the type *request_users*, *request_chat*, or *request_managed_bot*.|
