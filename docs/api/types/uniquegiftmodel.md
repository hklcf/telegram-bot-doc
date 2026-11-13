# UniqueGiftModel

> Part of the [Telegram Bot API](../../api.md). Canonical location: [UniqueGiftModel](../../api.md#uniquegiftmodel).

This object describes the model of a unique gift.

|Field|Type|Description|
|-----------|
|name|String|Name of the model|
|sticker|[Sticker](./sticker.md)|The sticker that represents the unique gift|
|rarity_per_mille|Integer|The number of unique gifts that receive this model for every 1000 gift upgrades. Always 0 for crafted gifts.|
|rarity|String|*Optional*. Rarity of the model if it is a crafted model. Currently, can be "uncommon", "rare", "epic", or "legendary".|
