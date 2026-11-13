# MessageReactionCountUpdated

> Part of the [Telegram Bot API](../../api.md). Canonical location: [MessageReactionCountUpdated](../../api.md#messagereactioncountupdated).

This object represents reaction changes on a message with anonymous reactions.

|Field|Type|Description|
|-----------|
|chat|[Chat](./chat.md)|The chat containing the message|
|message_id|Integer|Unique message identifier inside the chat|
|date|Integer|Date of the change in Unix time|
|reactions|Array of [ReactionCount](./reactioncount.md)|List of reactions that are present on the message|
