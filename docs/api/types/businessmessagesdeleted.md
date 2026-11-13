# BusinessMessagesDeleted

> Part of the [Telegram Bot API](../../api.md). Canonical location: [BusinessMessagesDeleted](../../api.md#businessmessagesdeleted).

This object is received when messages are deleted from a connected business account.

|Field|Type|Description|
|-----------|
|business_connection_id|String|Unique identifier of the business connection|
|chat|[Chat](./chat.md)|Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.|
|message_ids|Array of Integer|The list of identifiers of deleted messages in the chat of the business account|
