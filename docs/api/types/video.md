# Video

> Part of the [Telegram Bot API](../../api.md). Canonical location: [Video](../../api.md#video).

This object represents a video file.

|Field|Type|Description|
|-----------|
|file_id|String|Identifier for this file, which can be used to download or reuse the file|
|file_unique_id|String|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|width|Integer|Video width as defined by the sender|
|height|Integer|Video height as defined by the sender|
|duration|Integer|Duration of the video in seconds as defined by the sender|
|thumbnail|[PhotoSize](./photosize.md)|*Optional*. Video thumbnail|
|cover|Array of [PhotoSize](./photosize.md)|*Optional*. Available sizes of the cover of the video in the message|
|start_timestamp|Integer|*Optional*. Timestamp in seconds from which the video will play in the message|
|qualities|Array of [VideoQuality](./videoquality.md)|*Optional*. List of available qualities of the video|
|file_name|String|*Optional*. Original filename as defined by the sender|
|mime_type|String|*Optional*. MIME type of the file as defined by the sender|
|file_size|Integer|*Optional*. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.|
