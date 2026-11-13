# setStickerMaskPosition

> Part of the [Telegram Bot API](../../api.md). Canonical location: [setStickerMaskPosition](../../api.md#setstickermaskposition).

Use this method to change the [mask position](../types/maskposition.md) of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|sticker|String|Yes|File identifier of the sticker|
|mask_position|[MaskPosition](../types/maskposition.md)|Optional|A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.|
