# getMyCommands

> Part of the [Telegram Bot API](../../api.md). Canonical location: [getMyCommands](../../api.md#getmycommands).

Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of [BotCommand](../types/botcommand.md) objects. If commands aren't set, an empty list is returned.

|Parameter|Type|Required|Description|
|-----------|
|scope|[BotCommandScope](../types/botcommandscope.md)|Optional|A JSON-serialized object, describing scope of users. Defaults to [BotCommandScopeDefault](../types/botcommandscopedefault.md).|
|language_code|String|Optional|A two-letter ISO 639-1 language code or an empty string|
