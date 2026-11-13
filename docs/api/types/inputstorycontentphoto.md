# InputStoryContentPhoto

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputStoryContentPhoto](../../api.md#inputstorycontentphoto).

Describes a photo to post as a story.

|Field|Type|Description|
|-----------|
|type|String|Type of the content, must be *photo*|
|photo|String|The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass "attach://&lt;file_attach_name&gt;" if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. [More information on Sending Files »](../../api.md#sending-files)|
