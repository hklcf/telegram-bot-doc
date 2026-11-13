# InputRichBlockDocument

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputRichBlockDocument](../../api.md#inputrichblockdocument).

A block with a general file, corresponding to the custom HTML tag `<tg-document>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "document"|
|document|[InputMediaDocument](./inputmediadocument.md)|The document. Caption is ignored.|
|caption|[RichBlockCaption](./richblockcaption.md)|*Optional*. Caption of the block|
