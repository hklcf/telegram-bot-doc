# Checklist

> Part of the [Telegram Bot API](../../api.md). Canonical location: [Checklist](../../api.md#checklist).

Describes a checklist.

|Field|Type|Description|
|-----------|
|title|String|Title of the checklist|
|title_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. Special entities that appear in the checklist title|
|tasks|Array of [ChecklistTask](./checklisttask.md)|List of tasks in the checklist|
|others_can_add_tasks|True|*Optional*. *True*, if users other than the creator of the list can add tasks to the list|
|others_can_mark_tasks_as_done|True|*Optional*. *True*, if users other than the creator of the list can mark tasks as done or not done|
