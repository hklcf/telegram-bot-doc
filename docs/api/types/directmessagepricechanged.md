# DirectMessagePriceChanged

> Part of the [Telegram Bot API](../../api.md). Canonical location: [DirectMessagePriceChanged](../../api.md#directmessagepricechanged).

Describes a service message about a change in the price of direct messages sent to a channel chat.

|Field|Type|Description|
|-----------|
|are_direct_messages_enabled|Boolean|*True*, if direct messages are enabled for the channel chat; *False* otherwise|
|direct_message_star_count|Integer|*Optional*. The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0.|
