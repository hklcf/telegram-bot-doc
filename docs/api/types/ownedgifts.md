# OwnedGifts

> Part of the [Telegram Bot API](../../api.md). Canonical location: [OwnedGifts](../../api.md#ownedgifts).

Contains the list of gifts received and owned by a user or a chat.

|Field|Type|Description|
|-----------|
|total_count|Integer|The total number of gifts owned by the user or the chat|
|gifts|Array of [OwnedGift](./ownedgift.md)|The list of gifts|
|next_offset|String|*Optional*. Offset for the next request. If empty, then there are no more results.|
