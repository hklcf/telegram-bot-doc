# RichBlockListItem

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichBlockListItem](../../api.md#richblocklistitem).

An item of a list.

|Field|Type|Description|
|-----------|
|label|String|Label of the item|
|blocks|Array of [RichBlock](./richblock.md)|The content of the item|
|has_checkbox|True|*Optional*. *True*, if the item has a checkbox|
|is_checked|True|*Optional*. *True*, if the item has a checked checkbox|
|value|Integer|*Optional*. For ordered lists, the numeric value of the item label|
|type|String|*Optional*. For ordered lists, the type of the item label; must be one of "a" for lowercase letters, "A" for uppercase letters, "i" for lowercase Roman numerals, "I" for uppercase Roman numerals, or "1" for decimal numbers|
