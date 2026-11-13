# InputMediaSticker

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputMediaSticker](../../api.md#inputmediasticker).

Represents a sticker file to be sent.

|Field|Type|Description|
|-----------|
|type|String|Type of the media, must be *sticker*|
|media|String|File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a .WEBP sticker from the Internet, or pass "attach://&lt;file_attach_name&gt;" to upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data under &lt;file_attach_name&gt; name. [More information on Sending Files »](../../api.md#sending-files)|
|emoji|String|*Optional*. Emoji associated with the sticker; only for just uploaded stickers|
