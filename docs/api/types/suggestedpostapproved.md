# SuggestedPostApproved

> Part of the [Telegram Bot API](../../api.md). Canonical location: [SuggestedPostApproved](../../api.md#suggestedpostapproved).

Describes a service message about the approval of a suggested post.

|Field|Type|Description|
|-----------|
|suggested_post_message|[Message](./message.md)|*Optional*. Message containing the suggested post. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|price|[SuggestedPostPrice](./suggestedpostprice.md)|*Optional*. Amount paid for the post|
|send_date|Integer|Date when the post will be published|
