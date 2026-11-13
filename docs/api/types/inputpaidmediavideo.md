# InputPaidMediaVideo

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputPaidMediaVideo](../../api.md#inputpaidmediavideo).

The paid media to send is a video.

|Field|Type|Description|
|-----------|
|type|String|Type of the media, must be *video*|
|media|String|File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file_attach_name&gt;" to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. [More information on Sending Files »](../../api.md#sending-files)|
|thumbnail|String|*Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://&lt;file_attach_name&gt;" if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. [More information on Sending Files »](../../api.md#sending-files)|
|cover|String|*Optional*. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file_attach_name&gt;" to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. [More information on Sending Files »](../../api.md#sending-files)|
|start_timestamp|Integer|*Optional*. Start timestamp for the video in the message|
|width|Integer|*Optional*. Video width|
|height|Integer|*Optional*. Video height|
|duration|Integer|*Optional*. Video duration in seconds|
|supports_streaming|Boolean|*Optional*. Pass *True* if the uploaded video is suitable for streaming|
