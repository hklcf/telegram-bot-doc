# RichBlockButtons

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichBlockButtons](../../api.md#richblockbuttons).

A block containing a list of buttons that are shown in one row, corresponding to the custom HTML tag `<tg-button-row>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "buttons"|
|buttons|Array of [RichMessageButton](./richmessagebutton.md)|The buttons|
|align|String|*Optional*. Horizontal alignment of the buttons. Currently, must be one of "left", "center", or "right".|
