# InaccessibleMessage

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InaccessibleMessage](../../api.md#inaccessiblemessage).

This object describes a message that was deleted or is otherwise inaccessible to the bot.

|Field|Type|Description|
|-----------|
|chat|[Chat](./chat.md)|Chat the message belonged to|
|message_id|Integer|Unique message identifier inside the chat|
|date|Integer|Always 0. The field can be used to differentiate regular and inaccessible messages.|
