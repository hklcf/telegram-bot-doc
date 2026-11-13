# ChatMemberOwner

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChatMemberOwner](../../api.md#chatmemberowner).

Represents a [chat member](./chatmember.md) that owns the chat and has all administrator privileges.

|Field|Type|Description|
|-----------|
|status|String|The member's status in the chat, always "creator"|
|user|[User](./user.md)|Information about the user|
|is_anonymous|Boolean|*True*, if the user's presence in the chat is hidden|
|custom_title|String|*Optional*. Custom title for this user|
