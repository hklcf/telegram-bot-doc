# getCustomEmojiStickers

> Part of the [Telegram Bot API](../../api.md). Canonical location: [getCustomEmojiStickers](../../api.md#getcustomemojistickers).

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of [Sticker](../types/sticker.md) objects.

|Parameter|Type|Required|Description|
|-----------|
|custom_emoji_ids|Array of String|Yes|A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.|
