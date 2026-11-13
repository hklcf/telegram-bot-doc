# ProximityAlertTriggered

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ProximityAlertTriggered](../../api.md#proximityalerttriggered).

This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.

|Field|Type|Description|
|-----------|
|traveler|[User](./user.md)|User that triggered the alert|
|watcher|[User](./user.md)|User that set the alert|
|distance|Integer|The distance between the users|
