# unpinAllGeneralForumTopicMessages

> Part of the [Telegram Bot API](../../api.md). Canonical location: [unpinAllGeneralForumTopicMessages](../../api.md#unpinallgeneralforumtopicmessages).

Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the *can_pin_messages* administrator right in the supergroup. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target supergroup in the format `@username`|
