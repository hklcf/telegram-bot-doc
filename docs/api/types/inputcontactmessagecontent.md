# InputContactMessageContent

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputContactMessageContent](../../api.md#inputcontactmessagecontent).

Represents the [content](./inputmessagecontent.md) of a contact message to be sent as the result of an inline query.

|Field|Type|Description|
|-----------|
|phone_number|String|Contact's phone number|
|first_name|String|Contact's first name|
|last_name|String|*Optional*. Contact's last name|
|vcard|String|*Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes|
