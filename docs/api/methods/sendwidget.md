# sendWidget

> Part of the [Telegram Bot API](../../api.md). Canonical location: [sendWidget](../../api.md#sendwidget).

Use this method to send a message with an [HTML widget](../../widgets.md). Currently, in the production environment, widgets can be sent only to private chats, and sent widgets automatically have protected content and therefore can't be forwarded. On success, the sent [Message](../types/message.md) is returned.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target supergroup in the format `@username`|
|message_thread_id|Integer|Optional|Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only|
|html|String|Yes|HTML code of the widget, 1-32768 bytes. The code must not exceed 4096 bytes when compressed by zlib with the maximum compression level.|
|width|Integer|Optional|Width of the widget in logical pixels; omit if the widget must occupy the whole width of the message bubble. The width is clamped by the app to the range from 200 to the maximum width of the message bubble.|
|height|Integer|Optional|Height of the widget in logical pixels; omit if the height of the widget isn't fixed. The height is clamped by the app to the range 50-600.|
|public_data|String|Optional|Public data of the widget, 0-1024 bytes, which will be available wherever the widget is shown. If the widget is shared, then all messages with it will have the same public data.|
|chat_data|String|Optional|Data of the widget, which is specific to the message, 0-1024 bytes|
|caption|String|Optional|Widget caption, 0-1024 characters after entities parsing|
|parse_mode|String|Optional|Mode for parsing entities in the widget caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](../types/messageentity.md)|Optional|A JSON-serialized list of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|show_caption_above_media|Boolean|Optional|Pass *True* if the caption must be shown above the widget|
|allow_queries|Boolean|Optional|Pass *True* to allow the widget to send queries to the bot|
|is_shared|Boolean|Optional|Pass *True* to create a shared widget, which can be sent again using the method [sendSharedWidget](./sendsharedwidget.md)|
|disable_notification|Boolean|Optional|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|protect_content|Boolean|Optional|Protects the contents of the sent message from forwarding and saving|
|allow_paid_broadcast|Boolean|Optional|Pass *True* to allow up to 1000 messages per second, ignoring [broadcasting limits](../../faq.md#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.|
|message_effect_id|String|Optional|Unique identifier of the message effect to be added to the message; for private chats only|
|reply_parameters|[ReplyParameters](../types/replyparameters.md)|Optional|Description of the message to reply to|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md) or [ReplyKeyboardMarkup](../types/replykeyboardmarkup.md) or [ReplyKeyboardRemove](../types/replykeyboardremove.md) or [ForceReply](../types/forcereply.md)|Optional|Additional interface options. A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards), [custom reply keyboard](../../features.md#keyboards), instructions to remove a reply keyboard or to force a reply from the user.|
