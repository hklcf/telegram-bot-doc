# InputRichBlockPreformatted

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputRichBlockPreformatted](../../api.md#inputrichblockpreformatted).

A preformatted text block, corresponding to the nested HTML tags `<pre>` and `<code>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "pre"|
|text|[RichText](./richtext.md)|Text of the block|
|language|String|*Optional*. The programming language of the text|
