# sendVenue

> Part of the [Telegram Bot API](../../api.md). Canonical location: [sendVenue](../../api.md#sendvenue).

Use this method to send information about a venue. On success, the sent [Message](../types/message.md) is returned.

|Parameter|Type|Required|Description|
|-----------|
|business_connection_id|String|Optional|Unique identifier of the business connection on behalf of which the message will be sent|
|chat_id|Integer or String|Optional|Unique identifier for the target chat or username of the target bot, supergroup, or channel in the format `@username`; required unless the message is sent as an ephemeral reply to a callback query|
|message_thread_id|Integer|Optional|Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only|
|direct_messages_topic_id|Integer|Optional|Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat|
|ephemeral_message_parameters|[EphemeralMessageParameters](../types/ephemeralmessageparameters.md)|Optional|A JSON-serialized object containing the parameters of the ephemeral message to send|
|latitude|Float|Yes|Latitude of the venue|
|longitude|Float|Yes|Longitude of the venue|
|title|String|Yes|Name of the venue|
|address|String|Yes|Address of the venue|
|foursquare_id|String|Optional|Foursquare identifier of the venue|
|foursquare_type|String|Optional|Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)|
|google_place_id|String|Optional|Google Places identifier of the venue|
|google_place_type|String|Optional|Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)|
|disable_notification|Boolean|Optional|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|protect_content|Boolean|Optional|Protects the contents of the sent message from forwarding and saving|
|allow_paid_broadcast|Boolean|Optional|Pass *True* to allow up to 1000 messages per second, ignoring [broadcasting limits](../../faq.md#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.|
|message_effect_id|String|Optional|Unique identifier of the message effect to be added to the message; for private chats only|
|suggested_post_parameters|[SuggestedPostParameters](../types/suggestedpostparameters.md)|Optional|A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.|
|reply_parameters|[ReplyParameters](../types/replyparameters.md)|Optional|Description of the message to reply to|
|reply_markup|[InlineKeyboardMarkup](../types/inlinekeyboardmarkup.md) or [ReplyKeyboardMarkup](../types/replykeyboardmarkup.md) or [ReplyKeyboardRemove](../types/replykeyboardremove.md) or [ForceReply](../types/forcereply.md)|Optional|Additional interface options. A JSON-serialized object for an [inline keyboard](../../features.md#inline-keyboards), [custom reply keyboard](../../features.md#keyboards), instructions to remove a reply keyboard or to force a reply from the user.|
