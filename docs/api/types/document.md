# Document

> Part of the [Telegram Bot API](../../api.md). Canonical location: [Document](../../api.md#document).

This object represents a general file (as opposed to [photos](./photosize.md), [voice messages](./voice.md) and [audio files](./audio.md)).

|Field|Type|Description|
|-----------|
|file_id|String|Identifier for this file, which can be used to download or reuse the file|
|file_unique_id|String|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|thumbnail|[PhotoSize](./photosize.md)|*Optional*. Document thumbnail as defined by the sender|
|file_name|String|*Optional*. Original filename as defined by the sender|
|mime_type|String|*Optional*. MIME type of the file as defined by the sender|
|file_size|Integer|*Optional*. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.|
