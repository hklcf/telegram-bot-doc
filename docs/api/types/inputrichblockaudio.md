# InputRichBlockAudio

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputRichBlockAudio](../../api.md#inputrichblockaudio).

A block with a music file, corresponding to the HTML tag `<audio>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "audio"|
|audio|[InputMediaAudio](./inputmediaaudio.md)|The audio. Caption is ignored.|
|caption|[RichBlockCaption](./richblockcaption.md)|*Optional*. Caption of the block|
