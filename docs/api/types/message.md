# Message

> Part of the [Telegram Bot API](../../api.md). Canonical location: [Message](../../api.md#message).

This object represents a message.

|Field|Type|Description|
|-----------|
|message_id|Integer|Unique message identifier inside this chat; 0 for ephemeral messages. In specific instances (e.g., a message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent.|
|message_thread_id|Integer|*Optional*. Unique identifier of a message thread or forum topic to which the message belongs; for supergroups and private chats only|
|direct_messages_topic|[DirectMessagesTopic](./directmessagestopic.md)|*Optional*. Information about the direct messages chat topic that contains the message|
|from|[User](./user.md)|*Optional*. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats.|
|sender_chat|[Chat](./chat.md)|*Optional*. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field *from* contains a fake sender user in non-channel chats.|
|sender_boost_count|Integer|*Optional*. If the sender of the message boosted the chat, the number of boosts added by the user|
|sender_business_bot|[User](./user.md)|*Optional*. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.|
|sender_tag|String|*Optional*. Tag or custom title of the sender of the message; for supergroups only|
|receiver_user|[User](./user.md)|*Optional*. For ephemeral messages, the user who received the message|
|ephemeral_message_id|Integer|*Optional*. For ephemeral messages, identifier of the ephemeral message inside this chat. The identifier may be reused for another ephemeral message after the message is deleted or expires.|
|date|Integer|Date the message was sent in Unix time. It is always a positive number, representing a valid date.|
|guest_query_id|String|*Optional*. The unique identifier for the guest query. Use this identifier with the method [answerGuestQuery](../methods/answerguestquery.md) to send a response message. If non-empty, the message belongs to the chat where the guest bot was summoned, which may not coincide with other existing bot chats sharing the same identifier.|
|business_connection_id|String|*Optional*. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.|
|chat|[Chat](./chat.md)|Chat the message belongs to|
|forward_origin|[MessageOrigin](./messageorigin.md)|*Optional*. Information about the original message for forwarded messages|
|is_topic_message|True|*Optional*. *True*, if the message is sent to a topic in a forum supergroup or a private chat with the bot|
|is_automatic_forward|True|*Optional*. *True*, if the message is a channel post that was automatically forwarded to the connected discussion group|
|reply_to_message|[Message](./message.md)|*Optional*. For replies in the same chat and message thread, the original message. Note that the [Message](./message.md) object in this field will not contain further *reply_to_message* fields even if it itself is a reply. If the message is a reply to an ephemeral message, then this field may be omitted.|
|external_reply|[ExternalReplyInfo](./externalreplyinfo.md)|*Optional*. Information about the message that is being replied to, which may come from another chat or forum topic|
|quote|[TextQuote](./textquote.md)|*Optional*. For replies that quote part of the original message, the quoted part of the message|
|reply_to_story|[Story](./story.md)|*Optional*. For replies to a story, the original story|
|reply_to_checklist_task_id|Integer|*Optional*. Identifier of the specific checklist task that is being replied to|
|reply_to_poll_option_id|String|*Optional*. Persistent identifier of the specific poll option that is being replied to|
|via_bot|[User](./user.md)|*Optional*. Bot through which the message was sent|
|guest_bot_caller_user|[User](./user.md)|*Optional*. For a message sent by a guest bot, this is the user whose original message triggered the bot's response|
|guest_bot_caller_chat|[Chat](./chat.md)|*Optional*. For a message sent by a guest bot, this is the chat whose original message triggered the bot's response|
|edit_date|Integer|*Optional*. Date the message was last edited in Unix time|
|has_protected_content|True|*Optional*. *True*, if the message can't be forwarded|
|is_from_offline|True|*Optional*. *True*, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message|
|is_paid_post|True|*Optional*. *True*, if the message is a paid post. Note that such posts must not be deleted for 24 hours to receive the payment and can't be edited.|
|media_group_id|String|*Optional*. The unique identifier inside this chat of a media message group this message belongs to|
|author_signature|String|*Optional*. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator|
|paid_star_count|Integer|*Optional*. The number of Telegram Stars that were paid by the sender of the message to send it|
|text|String|*Optional*. For text messages, the actual UTF-8 text of the message|
|entities|Array of [MessageEntity](./messageentity.md)|*Optional*. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text|
|link_preview_options|[LinkPreviewOptions](./linkpreviewoptions.md)|*Optional*. Options used for link preview generation for the message, if it is a text message and link preview options were changed|
|suggested_post_info|[SuggestedPostInfo](./suggestedpostinfo.md)|*Optional*. Information about suggested post parameters if the message is a suggested post in a channel direct messages chat. If the message is an approved or declined suggested post, then it can't be edited.|
|effect_id|String|*Optional*. Unique identifier of the message effect added to the message|
|rich_message|[RichMessage](./richmessage.md)|*Optional*. Message is a rich formatted message|
|animation|[Animation](./animation.md)|*Optional*. Message is an animation, information about the animation. For backward compatibility, when this field is set, the *document* field will also be set.|
|audio|[Audio](./audio.md)|*Optional*. Message is an audio file, information about the file|
|document|[Document](./document.md)|*Optional*. Message is a general file, information about the file|
|live_photo|[LivePhoto](./livephoto.md)|*Optional*. Message is a live photo, information about the live photo. For backward compatibility, when this field is set, the *photo* field will also be set.|
|paid_media|[PaidMediaInfo](./paidmediainfo.md)|*Optional*. Message contains paid media; information about the paid media|
|photo|Array of [PhotoSize](./photosize.md)|*Optional*. Message is a photo, available sizes of the photo|
|sticker|[Sticker](./sticker.md)|*Optional*. Message is a sticker, information about the sticker|
|story|[Story](./story.md)|*Optional*. Message is a forwarded story|
|video|[Video](./video.md)|*Optional*. Message is a video, information about the video|
|video_note|[VideoNote](./videonote.md)|*Optional*. Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message|
|voice|[Voice](./voice.md)|*Optional*. Message is a voice message, information about the file|
|widget|[Widget](./widget.md)|*Optional*. Message is an HTML widget, information about the widget|
|caption|String|*Optional*. Caption for the animation, audio, document, live photo, paid media, photo, video, voice, or widget|
|caption_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption|
|show_caption_above_media|True|*Optional*. *True*, if the caption must be shown above the message media or the widget|
|has_media_spoiler|True|*Optional*. *True*, if the message media is covered by a spoiler animation|
|checklist|[Checklist](./checklist.md)|*Optional*. Message is a checklist|
|contact|[Contact](./contact.md)|*Optional*. Message is a shared contact, information about the contact|
|dice|[Dice](./dice.md)|*Optional*. Message is a dice with random value|
|game|[Game](./game.md)|*Optional*. Message is a game, information about the game. [More about games »](../../api.md#games)|
|poll|[Poll](./poll.md)|*Optional*. Message is a native poll, information about the poll|
|venue|[Venue](./venue.md)|*Optional*. Message is a venue, information about the venue. For backward compatibility, when this field is set, the *location* field will also be set.|
|location|[Location](./location.md)|*Optional*. Message is a shared location, information about the location|
|new_chat_members|Array of [User](./user.md)|*Optional*. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)|
|left_chat_member|[User](./user.md)|*Optional*. A member was removed from the group, information about them (this member may be the bot itself)|
|chat_owner_left|[ChatOwnerLeft](./chatownerleft.md)|*Optional*. Service message: chat owner has left|
|chat_owner_changed|[ChatOwnerChanged](./chatownerchanged.md)|*Optional*. Service message: chat owner has changed|
|new_chat_title|String|*Optional*. A chat title was changed to this value|
|new_chat_photo|Array of [PhotoSize](./photosize.md)|*Optional*. A chat photo was change to this value|
|delete_chat_photo|True|*Optional*. Service message: the chat photo was deleted|
|group_chat_created|True|*Optional*. Service message: the group has been created|
|supergroup_chat_created|True|*Optional*. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.|
|channel_chat_created|True|*Optional*. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.|
|message_auto_delete_timer_changed|[MessageAutoDeleteTimerChanged](./messageautodeletetimerchanged.md)|*Optional*. Service message: auto-delete timer settings changed in the chat|
|migrate_to_chat_id|Integer|*Optional*. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.|
|migrate_from_chat_id|Integer|*Optional*. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.|
|pinned_message|[MaybeInaccessibleMessage](./maybeinaccessiblemessage.md)|*Optional*. Specified message was pinned. Note that the [Message](./message.md) object in this field will not contain further *reply_to_message* fields even if it itself is a reply.|
|invoice|[Invoice](./invoice.md)|*Optional*. Message is an invoice for a [payment](../../api.md#payments), information about the invoice. [More about payments »](../../api.md#payments)|
|successful_payment|[SuccessfulPayment](./successfulpayment.md)|*Optional*. Message is a service message about a successful payment, information about the payment. [More about payments »](../../api.md#payments)|
|refunded_payment|[RefundedPayment](./refundedpayment.md)|*Optional*. Message is a service message about a refunded payment, information about the payment. [More about payments »](../../api.md#payments)|
|users_shared|[UsersShared](./usersshared.md)|*Optional*. Service message: users were shared with the bot|
|chat_shared|[ChatShared](./chatshared.md)|*Optional*. Service message: a chat was shared with the bot|
|gift|[GiftInfo](./giftinfo.md)|*Optional*. Service message: a regular gift was sent or received|
|unique_gift|[UniqueGiftInfo](./uniquegiftinfo.md)|*Optional*. Service message: a unique gift was sent or received|
|gift_upgrade_sent|[GiftInfo](./giftinfo.md)|*Optional*. Service message: upgrade of a gift was purchased after the gift was sent|
|connected_website|String|*Optional*. The domain name of the website on which the user has logged in. [More about Telegram Login »](../../widgets/login.md)|
|write_access_allowed|[WriteAccessAllowed](./writeaccessallowed.md)|*Optional*. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method [requestWriteAccess](../../webapps.md#initializing-mini-apps)|
|passport_data|[PassportData](./passportdata.md)|*Optional*. Telegram Passport data|
|proximity_alert_triggered|[ProximityAlertTriggered](./proximityalerttriggered.md)|*Optional*. Service message: a user in the chat triggered another user's proximity alert while sharing Live Location|
|boost_added|[ChatBoostAdded](./chatboostadded.md)|*Optional*. Service message: user boosted the chat|
|chat_background_set|[ChatBackground](./chatbackground.md)|*Optional*. Service message: chat background set|
|checklist_tasks_done|[ChecklistTasksDone](./checklisttasksdone.md)|*Optional*. Service message: some tasks in a checklist were marked as done or not done|
|checklist_tasks_added|[ChecklistTasksAdded](./checklisttasksadded.md)|*Optional*. Service message: tasks were added to a checklist|
|community_chat_added|[CommunityChatAdded](./communitychatadded.md)|*Optional*. Service message: chat or bot added to a [Community](./community.md)|
|community_chat_joined|[CommunityChatJoined](./communitychatjoined.md)|*Optional*. Service message: chat was joined by a user from a [Community](./community.md)|
|community_chat_removed|[CommunityChatRemoved](./communitychatremoved.md)|*Optional*. Service message: chat or bot removed from a [Community](./community.md)|
|direct_message_price_changed|[DirectMessagePriceChanged](./directmessagepricechanged.md)|*Optional*. Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed|
|forum_topic_created|[ForumTopicCreated](./forumtopiccreated.md)|*Optional*. Service message: forum topic created|
|forum_topic_edited|[ForumTopicEdited](./forumtopicedited.md)|*Optional*. Service message: forum topic edited|
|forum_topic_closed|[ForumTopicClosed](./forumtopicclosed.md)|*Optional*. Service message: forum topic closed|
|forum_topic_reopened|[ForumTopicReopened](./forumtopicreopened.md)|*Optional*. Service message: forum topic reopened|
|general_forum_topic_hidden|[GeneralForumTopicHidden](./generalforumtopichidden.md)|*Optional*. Service message: the 'General' forum topic hidden|
|general_forum_topic_unhidden|[GeneralForumTopicUnhidden](./generalforumtopicunhidden.md)|*Optional*. Service message: the 'General' forum topic unhidden|
|giveaway_created|[GiveawayCreated](./giveawaycreated.md)|*Optional*. Service message: a scheduled giveaway was created|
|giveaway|[Giveaway](./giveaway.md)|*Optional*. The message is a scheduled giveaway message|
|giveaway_winners|[GiveawayWinners](./giveawaywinners.md)|*Optional*. A giveaway with public winners was completed|
|giveaway_completed|[GiveawayCompleted](./giveawaycompleted.md)|*Optional*. Service message: a giveaway without public winners was completed|
|managed_bot_created|[ManagedBotCreated](./managedbotcreated.md)|*Optional*. Service message: user created a bot that will be managed by the current bot|
|paid_message_price_changed|[PaidMessagePriceChanged](./paidmessagepricechanged.md)|*Optional*. Service message: the price for paid messages has changed in the chat|
|paid_messages_waived|[PaidMessagesWaived](./paidmessageswaived.md)|*Optional*. Service message: the sender of the message used a link of the other user, which allows sending messages to the user without paying Telegram Stars|
|poll_option_added|[PollOptionAdded](./polloptionadded.md)|*Optional*. Service message: answer option was added to a poll|
|poll_option_deleted|[PollOptionDeleted](./polloptiondeleted.md)|*Optional*. Service message: answer option was deleted from a poll|
|suggested_post_approved|[SuggestedPostApproved](./suggestedpostapproved.md)|*Optional*. Service message: a suggested post was approved|
|suggested_post_approval_failed|[SuggestedPostApprovalFailed](./suggestedpostapprovalfailed.md)|*Optional*. Service message: approval of a suggested post has failed|
|suggested_post_declined|[SuggestedPostDeclined](./suggestedpostdeclined.md)|*Optional*. Service message: a suggested post was declined|
|suggested_post_paid|[SuggestedPostPaid](./suggestedpostpaid.md)|*Optional*. Service message: payment for a suggested post was received|
|suggested_post_refunded|[SuggestedPostRefunded](./suggestedpostrefunded.md)|*Optional*. Service message: payment for a suggested post was refunded|
|ton_wallet_transfer|[TonWalletTransfer](./tonwallettransfer.md)|*Optional*. Service message: a transfer with a TON wallet|
|video_chat_scheduled|[VideoChatScheduled](./videochatscheduled.md)|*Optional*. Service message: video chat scheduled|
|video_chat_started|[VideoChatStarted](./videochatstarted.md)|*Optional*. Service message: video chat started|
|video_chat_ended|[VideoChatEnded](./videochatended.md)|*Optional*. Service message: video chat ended|
|video_chat_participants_invited|[VideoChatParticipantsInvited](./videochatparticipantsinvited.md)|*Optional*. Service message: new participants invited to a video chat|
|web_app_data|[WebAppData](./webappdata.md)|*Optional*. Service message: data sent by a Web App|
|reply_markup|[InlineKeyboardMarkup](./inlinekeyboardmarkup.md)|*Optional*. [Inline keyboard](../../features.md#inline-keyboards) attached to the message. `login_url` buttons are represented as ordinary `url` buttons.|
