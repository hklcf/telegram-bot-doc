# SuggestedPostPaid

> Part of the [Telegram Bot API](../../api.md). Canonical location: [SuggestedPostPaid](../../api.md#suggestedpostpaid).

Describes a service message about a successful payment for a suggested post.

|Field|Type|Description|
|-----------|
|suggested_post_message|[Message](./message.md)|*Optional*. Message containing the suggested post. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|currency|String|Currency in which the payment was made. Currently, one of "XTR" for Telegram Stars or "TON" for TON grams.|
|amount|Integer|*Optional*. The amount of the currency that was received by the channel in nanograms; for payments in TON grams only|
|star_amount|[StarAmount](./staramount.md)|*Optional*. The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only|
