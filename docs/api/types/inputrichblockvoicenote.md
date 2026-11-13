# InputRichBlockVoiceNote

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputRichBlockVoiceNote](../../api.md#inputrichblockvoicenote).

A block with a voice note, corresponding to the HTML tag `<audio>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "voice_note"|
|voice_note|[InputMediaVoiceNote](./inputmediavoicenote.md)|The voice note. Caption is ignored.|
|caption|[RichBlockCaption](./richblockcaption.md)|*Optional*. Caption of the block|
