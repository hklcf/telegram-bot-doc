# MessageReactionUpdated

> Part of the [Telegram Bot API](../../api.md). Canonical location: [MessageReactionUpdated](../../api.md#messagereactionupdated).

This object represents a change of a reaction on a message performed by a user.

|Field|Type|Description|
|-----------|
|chat|[Chat](./chat.md)|The chat containing the message the user reacted to|
|message_id|Integer|Unique identifier of the message inside the chat|
|user|[User](./user.md)|*Optional*. The user that changed the reaction, if the user isn't anonymous|
|actor_chat|[Chat](./chat.md)|*Optional*. The chat on behalf of which the reaction was changed, if the user is anonymous|
|date|Integer|Date of the change in Unix time|
|old_reaction|Array of [ReactionType](./reactiontype.md)|Previous list of reaction types that were set by the user|
|new_reaction|Array of [ReactionType](./reactiontype.md)|New list of reaction types that have been set by the user|
