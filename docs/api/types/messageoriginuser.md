# MessageOriginUser

> Part of the [Telegram Bot API](../../api.md). Canonical location: [MessageOriginUser](../../api.md#messageoriginuser).

The message was originally sent by a known user.

|Field|Type|Description|
|-----------|
|type|String|Type of the message origin, always "user"|
|date|Integer|Date the message was sent originally in Unix time|
|sender_user|[User](./user.md)|User that sent the message originally|
