# getMyDefaultAdministratorRights

> Part of the [Telegram Bot API](../../api.md). Canonical location: [getMyDefaultAdministratorRights](../../api.md#getmydefaultadministratorrights).

Use this method to get the current default administrator rights of the bot. Returns [ChatAdministratorRights](../types/chatadministratorrights.md) on success.

|Parameter|Type|Required|Description|
|-----------|
|for_channels|Boolean|Optional|Pass *True* to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.|
