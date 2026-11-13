# ChecklistTasksAdded

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChecklistTasksAdded](../../api.md#checklisttasksadded).

Describes a service message about tasks added to a checklist.

|Field|Type|Description|
|-----------|
|checklist_message|[Message](./message.md)|*Optional*. Message containing the checklist to which the tasks were added. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|tasks|Array of [ChecklistTask](./checklisttask.md)|List of tasks added to the checklist|
