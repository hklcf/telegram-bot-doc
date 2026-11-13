# deleteMessages

> Part of the [Telegram Bot API](../../api.md). Canonical location: [deleteMessages](../../api.md#deletemessages).

Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target bot, supergroup, or channel in the format `@username`|
|message_ids|Array of Integer|Yes|A JSON-serialized list of 1-100 identifiers of messages to delete. See [deleteMessage](./deletemessage.md) for limitations on which messages can be deleted.|
