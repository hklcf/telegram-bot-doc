# editChatSubscriptionInviteLink

> Part of the [Telegram Bot API](../../api.md). Canonical location: [editChatSubscriptionInviteLink](../../api.md#editchatsubscriptioninvitelink).

Use this method to edit a subscription invite link created by the bot. The bot must have the *can_invite_users* administrator rights. Returns the edited invite link as a [ChatInviteLink](../types/chatinvitelink.md) object.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target channel in the format `@username`|
|invite_link|String|Yes|The invite link to edit|
|name|String|Optional|Invite link name; 0-32 characters|
