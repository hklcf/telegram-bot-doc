# RichBlockPhoto

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichBlockPhoto](../../api.md#richblockphoto).

A block with a photo, corresponding to the HTML tag `<img>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "photo"|
|photo|Array of [PhotoSize](./photosize.md)|Available sizes of the photo|
|has_spoiler|True|*Optional*. *True*, if the media preview is covered by a spoiler animation|
|caption|[RichBlockCaption](./richblockcaption.md)|*Optional*. Caption of the block|
