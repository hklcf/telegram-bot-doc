# ChecklistTasksDone

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChecklistTasksDone](../../api.md#checklisttasksdone).

Describes a service message about checklist tasks marked as done or not done.

|Field|Type|Description|
|-----------|
|checklist_message|[Message](./message.md)|*Optional*. Message containing the checklist whose tasks were marked as done or not done. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|marked_as_done_task_ids|Array of Integer|*Optional*. Identifiers of the tasks that were marked as done|
|marked_as_not_done_task_ids|Array of Integer|*Optional*. Identifiers of the tasks that were marked as not done|
