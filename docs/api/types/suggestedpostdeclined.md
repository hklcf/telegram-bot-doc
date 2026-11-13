# SuggestedPostDeclined

> Part of the [Telegram Bot API](../../api.md). Canonical location: [SuggestedPostDeclined](../../api.md#suggestedpostdeclined).

Describes a service message about the rejection of a suggested post.

|Field|Type|Description|
|-----------|
|suggested_post_message|[Message](./message.md)|*Optional*. Message containing the suggested post. Note that the [Message](./message.md) object in this field will not contain the *reply_to_message* field even if it itself is a reply.|
|comment|String|*Optional*. Comment with which the post was declined|
