# SharedWidgetQuery

> Part of the [Telegram Bot API](../../api.md). Canonical location: [SharedWidgetQuery](../../api.md#sharedwidgetquery).

This object represents an incoming query from a forwarded message with a shared widget created by the bot. Use [answerWidgetQuery](../methods/answerwidgetquery.md) to answer the query. Each user can send at most 5 queries per 5 seconds to the bot from all its widgets.

|Field|Type|Description|
|-----------|
|id|String|Unique identifier for this query|
|from|[User](./user.md)|Sender|
|type|[WidgetQueryType](./widgetquerytype.md)|Type of the query|
|data|String|Data of the query, 1-64 bytes|
|widget_id|String|Unique identifier of the shared widget, which sent the query|
