# deleteMyCommands

> Part of the [Telegram Bot API](../../api.md). Canonical location: [deleteMyCommands](../../api.md#deletemycommands).

Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, [higher level commands](../../api.md#determining-list-of-commands) will be shown to affected users. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|scope|[BotCommandScope](../types/botcommandscope.md)|Optional|A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to [BotCommandScopeDefault](../types/botcommandscopedefault.md).|
|language_code|String|Optional|A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.|
