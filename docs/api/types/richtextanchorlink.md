# RichTextAnchorLink

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichTextAnchorLink](../../api.md#richtextanchorlink).

A link to an anchor.

|Field|Type|Description|
|-----------|
|type|String|Type of the rich text, always "anchor_link"|
|text|[RichText](./richtext.md)|The link text|
|anchor_name|String|The name of the anchor. If the name is empty, then the link brings back to the top of the message.|
