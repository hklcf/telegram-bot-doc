# BotCommandScopeChat

> Part of the [Telegram Bot API](../../api.md). Canonical location: [BotCommandScopeChat](../../api.md#botcommandscopechat).

Represents the [scope](./botcommandscope.md) of bot commands, covering a specific chat.

|Field|Type|Description|
|-----------|
|type|String|Scope type, must be *chat*|
|chat_id|Integer or String|Unique identifier for the target chat or username of the target supergroup in the format `@username`. Channel direct messages chats and channel chats aren't supported.|
