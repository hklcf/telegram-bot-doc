# RichBlockMap

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichBlockMap](../../api.md#richblockmap).

A block with a map, corresponding to the custom HTML tag `<tg-map>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "map"|
|location|[Location](./location.md)|Location of the center of the map|
|zoom|Integer|Map zoom level|
|width|Integer|Expected width of the map|
|height|Integer|Expected height of the map|
|caption|[RichBlockCaption](./richblockcaption.md)|*Optional*. Caption of the block|
