# addStickerToSet

> Part of the [Telegram Bot API](../../api.md). Canonical location: [addStickerToSet](../../api.md#addstickertoset).

Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|User identifier of sticker set owner|
|name|String|Yes|Sticker set name|
|sticker|[InputSticker](../types/inputsticker.md)|Yes|A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.|
