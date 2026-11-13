# RichBlockVideo

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichBlockVideo](../../api.md#richblockvideo).

A block with a video, corresponding to the HTML tag `<video>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "video"|
|video|[Video](./video.md)|The video|
|has_spoiler|True|*Optional*. *True*, if the media preview is covered by a spoiler animation|
|caption|[RichBlockCaption](./richblockcaption.md)|*Optional*. Caption of the block|
