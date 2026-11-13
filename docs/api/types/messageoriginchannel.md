# MessageOriginChannel

> Part of the [Telegram Bot API](../../api.md). Canonical location: [MessageOriginChannel](../../api.md#messageoriginchannel).

The message was originally sent to a channel chat.

|Field|Type|Description|
|-----------|
|type|String|Type of the message origin, always "channel"|
|date|Integer|Date the message was sent originally in Unix time|
|chat|[Chat](./chat.md)|Channel chat to which the message was originally sent|
|message_id|Integer|Unique message identifier inside the chat|
|author_signature|String|*Optional*. Signature of the original post author|
