# ChatMemberBanned

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChatMemberBanned](../../api.md#chatmemberbanned).

Represents a [chat member](./chatmember.md) that was banned in the chat and can't return to the chat or view chat messages.

|Field|Type|Description|
|-----------|
|status|String|The member's status in the chat, always "kicked"|
|user|[User](./user.md)|Information about the user|
|until_date|Integer|Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever.|
