# InputMediaPhoto

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputMediaPhoto](../../api.md#inputmediaphoto).

Represents a photo to be sent.

|Field|Type|Description|
|-----------|
|type|String|Type of the media, must be *photo*|
|media|String|File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file_attach_name&gt;" to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. [More information on Sending Files »](../../api.md#sending-files)|
|caption|String|*Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing|
|parse_mode|String|*Optional*. Mode for parsing entities in the photo caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|show_caption_above_media|Boolean|*Optional*. Pass *True* if the caption must be shown above the message media|
|has_spoiler|Boolean|*Optional*. Pass *True* if the photo needs to be covered with a spoiler animation|
