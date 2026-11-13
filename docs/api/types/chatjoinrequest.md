# ChatJoinRequest

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChatJoinRequest](../../api.md#chatjoinrequest).

Represents a join request sent to a chat.

|Field|Type|Description|
|-----------|
|chat|[Chat](./chat.md)|Chat to which the request was sent|
|from|[User](./user.md)|User that sent the join request|
|user_chat_id|Integer|Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.|
|date|Integer|Date the request was sent in Unix time|
|bio|String|*Optional*. Bio of the user|
|invite_link|[ChatInviteLink](./chatinvitelink.md)|*Optional*. Chat invite link that was used by the user to send the join request|
|query_id|String|*Optional*. Identifier of the join request query; for bots assigned to process join requests only. If present, then the bot must call [sendChatJoinRequestWebApp](../methods/sendchatjoinrequestwebapp.md) or directly call [answerChatJoinRequestQuery](../methods/answerchatjoinrequestquery.md) within 10 seconds.|
