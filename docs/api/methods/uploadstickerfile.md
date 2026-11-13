# uploadStickerFile

> Part of the [Telegram Bot API](../../api.md). Canonical location: [uploadStickerFile](../../api.md#uploadstickerfile).

Use this method to upload a file with a sticker for later use in the [createNewStickerSet](./createnewstickerset.md), [addStickerToSet](./addstickertoset.md), or [replaceStickerInSet](./replacestickerinset.md) methods (the file can be used multiple times). Returns the uploaded [File](../types/file.md) on success.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|User identifier of sticker file owner|
|sticker|[InputFile](../types/inputfile.md)|Yes|A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See [https://core.telegram.org/stickers](../../stickers.md) for technical requirements. [More information on Sending Files »](../../api.md#sending-files)|
|sticker_format|String|Yes|Format of the sticker, must be one of "static", "animated", "video"|
