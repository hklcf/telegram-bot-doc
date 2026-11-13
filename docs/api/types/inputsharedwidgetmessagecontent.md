# InputSharedWidgetMessageContent

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InputSharedWidgetMessageContent](../../api.md#inputsharedwidgetmessagecontent).

Represents the [content](./inputmessagecontent.md) of a message with a shared widget to be sent as the result of an inline query. Currently, widgets can't be sent in response to inline queries in the production environment.

|Field|Type|Description|
|-----------|
|widget_id|String|Unique identifier of the shared widget created by the bot|
|chat_data|String|*Optional*. Data of the widget, which is specific to the message, 0-1024 bytes|
|caption|String|*Optional*. Widget caption, 0-1024 characters after entities parsing|
|parse_mode|String|*Optional*. Mode for parsing entities in the widget caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|show_caption_above_media|Boolean|*Optional*. Pass *True* if the caption must be shown above the widget|
