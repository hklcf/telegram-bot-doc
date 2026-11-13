# ChecklistTask

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChecklistTask](../../api.md#checklisttask).

Describes a task in a checklist.

|Field|Type|Description|
|-----------|
|id|Integer|Unique identifier of the task|
|text|String|Text of the task|
|text_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. Special entities that appear in the task text|
|completed_by_user|[User](./user.md)|*Optional*. User that completed the task; omitted if the task wasn't completed by a user|
|completed_by_chat|[Chat](./chat.md)|*Optional*. Chat that completed the task; omitted if the task wasn't completed by a chat|
|completion_date|Integer|*Optional*. Point in time (Unix timestamp) when the task was completed; 0 if the task wasn't completed|
