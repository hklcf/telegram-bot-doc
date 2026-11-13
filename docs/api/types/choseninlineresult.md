# ChosenInlineResult

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChosenInlineResult](../../api.md#choseninlineresult).

Represents a [result](./inlinequeryresult.md) of an inline query that was chosen by the user and sent to their chat partner.

|Field|Type|Description|
|-----------|
|result_id|String|The unique identifier for the result that was chosen|
|from|[User](./user.md)|The user that chose the result|
|location|[Location](./location.md)|*Optional*. Sender location, only for bots that require user location|
|inline_message_id|String|*Optional*. Identifier of the sent inline message. Available only if there is an [inline keyboard](./inlinekeyboardmarkup.md) attached to the message. Will be also received in [callback queries](./callbackquery.md) and can be used to [edit](../../api.md#updating-messages) the message.|
|query|String|The query that was used to obtain the result|

**Note:** It is necessary to enable [inline feedback](../../inline.md#collecting-feedback) via [@BotFather](https://t.me/botfather) in order to receive these objects in updates.
