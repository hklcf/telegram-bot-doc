# InputMediaVoiceNote

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputMediaVoiceNote](../../api.md#inputmediavoicenote).

Represents a voice message file to be sent.

|Field|Type|Description|
|-----------|
|type|String|Type of the media, must be *voice_note*|
|media|String|File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. [More information on Sending Files »](../../api.md#sending-files)|
|caption|String|*Optional*. Caption of the voice message to be sent, 0-1024 characters after entities parsing|
|parse_mode|String|*Optional*. Mode for parsing entities in the voice message caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|duration|Integer|*Optional*. Duration of the voice message in seconds|
