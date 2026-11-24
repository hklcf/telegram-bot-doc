# InputRichBlockExpandableBlockQuotation

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputRichBlockExpandableBlockQuotation](../../api.md#inputrichblockexpandableblockquotation).

A block quotation, corresponding to the HTML tag `<blockquote>` with the custom attribute `"expandable"`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "expandable_blockquote"|
|blocks|Array of [InputRichBlock](./inputrichblock.md)|Content of the block|
|credit|[RichText](./richtext.md)|*Optional*. Credit of the block|
