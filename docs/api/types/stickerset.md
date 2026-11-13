# StickerSet

> Part of the [Telegram Bot API](../../api.md). Canonical location: [StickerSet](../../api.md#stickerset).

This object represents a sticker set.

|Field|Type|Description|
|-----------|
|name|String|Sticker set name|
|title|String|Sticker set title|
|sticker_type|String|Type of stickers in the set, currently one of "regular", "mask", "custom_emoji"|
|stickers|Array of [Sticker](./sticker.md)|List of all set stickers|
|thumbnail|[PhotoSize](./photosize.md)|*Optional*. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format|
