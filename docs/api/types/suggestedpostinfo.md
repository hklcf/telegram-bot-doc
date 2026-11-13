# SuggestedPostInfo

> Part of the [Telegram Bot API](../../api.md). Canonical location: [SuggestedPostInfo](../../api.md#suggestedpostinfo).

Contains information about a suggested post.

|Field|Type|Description|
|-----------|
|state|String|State of the suggested post. Currently, it can be one of "pending", "approved", "declined".|
|price|[SuggestedPostPrice](./suggestedpostprice.md)|*Optional*. Proposed price of the post. If the field is omitted, then the post is unpaid.|
|send_date|Integer|*Optional*. Proposed send date of the post. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user or administrator who approves it.|
