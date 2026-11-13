# RichBlockThinking

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichBlockThinking](../../api.md#richblockthinking).

A block with a "Thinking..." placeholder, corresponding to the custom HTML tag `<tg-thinking>`. The block may be used only in [sendRichMessageDraft](../methods/sendrichmessagedraft.md), therefore it can't be received in messages. See [https://t.me/addemoji/AIActions](https://t.me/addemoji/AIActions) for examples of custom emoji that are recommended for usage in the block.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "thinking"|
|text|[RichText](./richtext.md)|Text of the block. See [https://t.me/addemoji/AIActions](https://t.me/addemoji/AIActions) for examples of custom emoji that are recommended for usage in the block.|
