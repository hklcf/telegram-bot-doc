# copyMessage

> Part of the [Telegram Bot API](../../api.md). Canonical location: [copyMessage](../../api.md#copymessage).

Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, invoice messages, and widget messages can't be copied. A quiz [poll](../types/poll.md) can be copied only if the value of the field *correct_option_ids* is known to the bot. The method is analogous to the method [forwardMessage](./forwardmessage.md), but the copied message doesn't have a link to the original message. Returns the [MessageId](../types/messageid.md) of the sent message on success.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target bot, supergroup, or channel in the format `@username`|
|message_thread_id|Integer|Optional|Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only|
|direct_messages_topic_id|Integer|Optional|Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat|
|from_chat_id|Integer or String|Yes|Unique identifier for the chat where the original message was sent (or username of the target bot, supergroup, or channel in the format `@username`)|
|message_id|Integer|Yes|Message identifier in the chat specified in *from_chat_id*|
|video_start_timestamp|Integer|Optional|New start timestamp for the copied video in the message|
|caption|String|Optional|New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept.|
|parse_mode|String|Optional|Mode for parsing entities in the new caption. See [formatting options](../formatting.md) for more details.|
|caption_entities|Array of [MessageEntity](../types/messageentity.md)|Optional|A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of *parse_mode*|
|show_caption_above_media|Boolean|Optional|Pass *True* if the caption must be shown above the message media. Ignored if a new caption isn't specified.|
|disable_notification|Boolean|Optional|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|protect_content|Boolean|Optional|Protects the contents of the sent message from forwarding and saving|
|allow_paid_broadcast|Boolean|Optional|Pass *True* to allow up to 1000 messages per second, ignoring [broadcasting limits](../../faq.md#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.|
|message_effect_id|String|Optional|Unique identifier of the message effect to be added to the message; only available when copying to private chats|
|suggested_post_parameters|[SuggestedPostParameters](../types/suggestedpostparameters.md)|Optional|A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.|
|reply_parameters|[ReplyParameters](../types/replyparameters.md)|Optional|Description of the message to reply to|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md) or [ReplyKeyboardMarkup](../types/replykeyboardmarkup.md) or [ReplyKeyboardRemove](../types/replykeyboardremove.md) or [ForceReply](../types/forcereply.md)|Optional|Additional interface options. A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards), [custom reply keyboard](../../features.md#keyboards), instructions to remove a reply keyboard or to force a reply from the user.|
