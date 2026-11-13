# SuggestedPostRefunded

> Part of the [Telegram Bot API](../../api.md). Canonical location: [SuggestedPostRefunded](../../api.md#suggestedpostrefunded).

Describes a service message about a payment refund for a suggested post.

|Field|Type|Description|
|-----------|
|suggested_post_message|[Message](./message.md)|*Optional*. Message containing the suggested post. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|reason|String|Reason for the refund. Currently, one of "post_deleted" if the post was deleted within 24 hours of being posted or removed from scheduled messages without being posted, or "payment_refunded" if the payer refunded their payment.|
