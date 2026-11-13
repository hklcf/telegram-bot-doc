# PollOptionAdded

> Part of the [Telegram Bot API](../../api.md). Canonical location: [PollOptionAdded](../../api.md#polloptionadded).

Describes a service message about an option added to a poll.

|Field|Type|Description|
|-----------|
|poll_message|[MaybeInaccessibleMessage](./maybeinaccessiblemessage.md)|*Optional*. Message containing the poll to which the option was added, if known. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|option_persistent_id|String|Unique identifier of the added option|
|option_text|String|Option text|
|option_text_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. Special entities that appear in the *option_text*|
