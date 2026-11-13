# savePreparedInlineMessage

> Part of the [Telegram Bot API](../../api.md). Canonical location: [savePreparedInlineMessage](../../api.md#savepreparedinlinemessage).

Stores a message that can be sent by a user of a Mini App. Returns a [PreparedInlineMessage](../types/preparedinlinemessage.md) object.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|Unique identifier of the target user that can use the prepared message|
|result|[InlineQueryResult](../types/inlinequeryresult.md)|Yes|A JSON-serialized object describing the message to be sent|
|allow_user_chats|Boolean|Optional|Pass *True* if the message can be sent to private chats with users|
|allow_bot_chats|Boolean|Optional|Pass *True* if the message can be sent to private chats with bots|
|allow_group_chats|Boolean|Optional|Pass *True* if the message can be sent to group and supergroup chats|
|allow_channel_chats|Boolean|Optional|Pass *True* if the message can be sent to channel chats|
