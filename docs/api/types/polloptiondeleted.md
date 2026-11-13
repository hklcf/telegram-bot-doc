# PollOptionDeleted

> Part of the [Telegram Bot API](../../api.md). Canonical location: [PollOptionDeleted](../../api.md#polloptiondeleted).

Describes a service message about an option deleted from a poll.

|Field|Type|Description|
|-----------|
|poll_message|[MaybeInaccessibleMessage](./maybeinaccessiblemessage.md)|*Optional*. Message containing the poll from which the option was deleted, if known. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|option_persistent_id|String|Unique identifier of the deleted option|
|option_text|String|Option text|
|option_text_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. Special entities that appear in the *option_text*|
