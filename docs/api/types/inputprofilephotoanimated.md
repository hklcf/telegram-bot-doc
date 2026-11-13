# InputProfilePhotoAnimated

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputProfilePhotoAnimated](../../api.md#inputprofilephotoanimated).

An animated profile photo in the MPEG4 format.

|Field|Type|Description|
|-----------|
|type|String|Type of the profile photo, must be *animated*|
|animation|String|The animated profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass "attach://&lt;file_attach_name&gt;" if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. [More information on Sending Files »](../../api.md#sending-files)|
|main_frame_timestamp|Float|*Optional*. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.|
