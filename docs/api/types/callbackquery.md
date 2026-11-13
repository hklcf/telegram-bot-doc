# CallbackQuery

> Part of the [Telegram Bot API](../../api.md). Canonical location: [CallbackQuery](../../api.md#callbackquery).

This object represents an incoming callback query from a callback button in an [inline keyboard](../../features.md#inline-keyboards). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](../../api.md#inline-mode)), the field *inline_message_id* will be present. Exactly one of the fields *data* or *game_short_name* will be present.

|Field|Type|Description|
|-----------|
|id|String|Unique identifier for this query|
|from|[User](./user.md)|Sender|
|message|[MaybeInaccessibleMessage](./maybeinaccessiblemessage.md)|*Optional*. Message sent by the bot with the callback button that originated the query|
|inline_message_id|String|*Optional*. Identifier of the message sent via the bot in inline mode, that originated the query|
|chat_instance|String|Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](../../api.md#games).|
|data|String|*Optional*. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.|
|game_short_name|String|*Optional*. Short name of a [Game](./game.md) to be returned, serves as the unique identifier for the game|

>**NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](../methods/answercallbackquery.md). It is, therefore, necessary to react by calling [answerCallbackQuery](../methods/answercallbackquery.md) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
