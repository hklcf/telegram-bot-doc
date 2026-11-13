# getUserPersonalChatMessages

> Part of the [Telegram Bot API](../../api.md). Canonical location: [getUserPersonalChatMessages](../../api.md#getuserpersonalchatmessages).

Use this method to get the last messages from the personal chat (i.e., the chat currently added to their profile) of a given user. On success, an Array of [Message](../types/message.md) objects is returned.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|Unique identifier for the target user|
|limit|Integer|Yes|The maximum number of messages to return; 1-20|
