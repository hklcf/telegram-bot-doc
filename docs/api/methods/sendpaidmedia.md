# sendPaidMedia

> Part of the [Telegram Bot API](../../api.md). Canonical location: [sendPaidMedia](../../api.md#sendpaidmedia).

Use this method to send paid media. On success, the sent [Message](../types/message.md) is returned.

|Parameter|Type|Required|Description|
|-----------|
|business_connection_id|String|Optional|Unique identifier of the business connection on behalf of which the message will be sent|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target bot, supergroup, or channel in the format `@username`. If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.|
|message_thread_id|Integer|Optional|Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only|
|direct_messages_topic_id|Integer|Optional|Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat|
|star_count|Integer|Yes|The number of Telegram Stars that must be paid to buy access to the media; 1-25000|
|media|Array of [InputPaidMedia](../types/inputpaidmedia.md)|Yes|A JSON-serialized Array describing the media to be sent; up to 10 items|
|payload|String|Optional|Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.|
|caption|String|Optional|Media caption, 0-1024 characters after entities parsing|
|parse_mode|String|Optional|Mode for parsing entities in the media caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](../types/messageentity.md)|Optional|A JSON-serialized list of special entities that appear in the caption, which can be specified instead of *parse_mode*|
|show_caption_above_media|Boolean|Optional|Pass *True* if the caption must be shown above the message media|
|disable_notification|Boolean|Optional|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|protect_content|Boolean|Optional|Protects the contents of the sent message from forwarding and saving|
|allow_paid_broadcast|Boolean|Optional|Pass *True* to allow up to 1000 messages per second, ignoring [broadcasting limits](../../faq.md#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.|
|suggested_post_parameters|[SuggestedPostParameters](../types/suggestedpostparameters.md)|Optional|A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.|
|reply_parameters|[ReplyParameters](../types/replyparameters.md)|Optional|Description of the message to reply to|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md) or [ReplyKeyboardMarkup](../types/replykeyboardmarkup.md) or [ReplyKeyboardRemove](../types/replykeyboardremove.md) or [ForceReply](../types/forcereply.md)|Optional|Additional interface options. A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards), [custom reply keyboard](../../features.md#keyboards), instructions to remove a reply keyboard or to force a reply from the user.|
