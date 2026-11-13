# InputChecklist

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputChecklist](../../api.md#inputchecklist).

Describes a checklist to create.

|Field|Type|Description|
|-----------|
|title|String|Title of the checklist; 1-255 characters after entities parsing|
|parse_mode|String|*Optional*. Mode for parsing entities in the title. See [formatting options](../formatting.md) for more details.|
|title_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only *bold*, *italic*, *underline*, *strikethrough*, *spoiler*, *custom_emoji*, and *date_time* entities are allowed.|
|tasks|Array of [InputChecklistTask](./inputchecklisttask.md)|List of 1-30 tasks in the checklist|
|others_can_add_tasks|Boolean|*Optional*. Pass *True* if other users can add tasks to the checklist|
|others_can_mark_tasks_as_done|Boolean|*Optional*. Pass *True* if other users can mark tasks as done or not done in the checklist|
