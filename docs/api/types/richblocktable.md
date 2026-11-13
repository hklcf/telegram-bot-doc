# RichBlockTable

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichBlockTable](../../api.md#richblocktable).

A table, corresponding to the HTML tag `<table>`.

|Field|Type|Description|
|-----------|
|type|String|Type of the block, always "table"|
|cells|Array of Array of [RichBlockTableCell](./richblocktablecell.md)|Cells of the table|
|is_bordered|True|*Optional*. *True*, if the table has borders|
|is_striped|True|*Optional*. *True*, if the table is striped|
|is_compact|True|*Optional*. *True*, if table cells have smaller indents|
|caption|[RichText](./richtext.md)|*Optional*. Caption of the table|
