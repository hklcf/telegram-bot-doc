# ShippingQuery

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ShippingQuery](../../api.md#shippingquery).

This object contains information about an incoming shipping query.

|Field|Type|Description|
|-----------|
|id|String|Unique query identifier|
|from|[User](./user.md)|User who sent the query|
|invoice_payload|String|Bot-specified invoice payload|
|shipping_address|[ShippingAddress](./shippingaddress.md)|User specified shipping address|
