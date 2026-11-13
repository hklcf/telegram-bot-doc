# InputMediaAudio

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputMediaAudio](../../api.md#inputmediaaudio).

Represents an audio file to be treated as music to be sent.

|Field|Type|Description|
|-----------|
|type|String|Type of the media, must be *audio*|
|media|String|File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file_attach_name&gt;" to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. [More information on Sending Files »](../../api.md#sending-files)|
|thumbnail|String|*Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://&lt;file_attach_name&gt;" if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. [More information on Sending Files »](../../api.md#sending-files)|
|caption|String|*Optional*. Caption of the audio to be sent, 0-1024 characters after entities parsing|
|parse_mode|String|*Optional*. Mode for parsing entities in the audio caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|duration|Integer|*Optional*. Duration of the audio in seconds|
|performer|String|*Optional*. Performer of the audio|
|title|String|*Optional*. Title of the audio|
