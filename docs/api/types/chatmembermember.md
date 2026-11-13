# ChatMemberMember

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChatMemberMember](../../api.md#chatmembermember).

Represents a [chat member](./chatmember.md) that has no additional privileges or restrictions.

|Field|Type|Description|
|-----------|
|status|String|The member's status in the chat, always "member"|
|tag|String|*Optional*. Tag of the member|
|user|[User](./user.md)|Information about the user|
|until_date|Integer|*Optional*. Date when the user's subscription will expire; Unix time|
