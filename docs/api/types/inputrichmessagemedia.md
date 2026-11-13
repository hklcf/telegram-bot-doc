# InputRichMessageMedia

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputRichMessageMedia](../../api.md#inputrichmessagemedia).

Describes a media element embedded in an outgoing rich message.

|Field|Type|Description|
|-----------|
|id|String|Unique identifier of the media used in a `tg://photo?id=`, `tg://video?id=`, `tg://document?id=`, or `tg://audio?id=` link. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.|
|media|[InputMediaAnimation](./inputmediaanimation.md) or [InputMediaAudio](./inputmediaaudio.md) or [InputMediaDocument](./inputmediadocument.md) or [InputMediaPhoto](./inputmediaphoto.md) or [InputMediaVideo](./inputmediavideo.md) or [InputMediaVoiceNote](./inputmediavoicenote.md)|The media to be sent. Everything except the media itself and its properties is ignored.|
