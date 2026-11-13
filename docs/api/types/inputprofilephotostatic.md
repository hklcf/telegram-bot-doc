# InputProfilePhotoStatic

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputProfilePhotoStatic](../../api.md#inputprofilephotostatic).

A static profile photo in the .JPG format.

|Field|Type|Description|
|-----------|
|type|String|Type of the profile photo, must be *static*|
|photo|String|The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass "attach://&lt;file_attach_name&gt;" if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. [More information on Sending Files »](../../api.md#sending-files)|
