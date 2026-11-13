# InputRichBlockDetails

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputRichBlockDetails](../../api.md#inputrichblockdetails).

An expandable block for details disclosure, corresponding to the HTML tag `<details>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "details"|
|summary|[RichText](./richtext.md)|Always shown summary of the block|
|blocks|Array of [InputRichBlock](./inputrichblock.md)|Content of the block|
|is_open|True|*Optional*. Pass *True* if the content of the block is visible by default|
