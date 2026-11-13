# RichTextDateTime

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichTextDateTime](../../api.md#richtextdatetime).

Formatted date and time.

|Field|Type|Description|
|-----------|
|type|String|Type of the rich text, always "date_time"|
|text|[RichText](./richtext.md)|The text|
|unix_time|Integer|The Unix time associated with the entity|
|date_time_format|String|The string that defines the formatting of the date and time. See [date-time entity formatting](../formatting.md#date-time-entity-formatting) for more details.|
