# InputPaidMediaPhoto

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputPaidMediaPhoto](../../api.md#inputpaidmediaphoto).

The paid media to send is a photo.

|Field|Type|Description|
|-----------|
|type|String|Type of the media, must be *photo*|
|media|String|File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file_attach_name&gt;" to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. [More information on Sending Files »](../../api.md#sending-files)|
