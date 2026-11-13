# revokeChatInviteLink

> Part of the [Telegram Bot API](../../api.md). Canonical location: [revokeChatInviteLink](../../api.md#revokechatinvitelink).

Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as [ChatInviteLink](../types/chatinvitelink.md) object.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier of the target chat or username of the target channel in the format `@username`|
|invite_link|String|Yes|The invite link to revoke|
