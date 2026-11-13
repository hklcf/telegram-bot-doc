# RichMessageButton

> Part of the [Telegram Bot API](../../api.md). Canonical location: [RichMessageButton](../../api.md#richmessagebutton).

This object represents a button in a [RichMessage](./richmessage.md). Exactly one of the fields other than *text* and *style* must be used to specify the type of the button.

|Field|Type|Description|
|-----------|
|text|[RichText](./richtext.md)|Text of the button. May contain only plain text, [RichTextCustomEmoji](./richtextcustomemoji.md) and [RichTextDateTime](./richtextdatetime.md) entities.|
|style|String|*Optional*. Style of the button. Must be one of "danger", "success", "primary", or "link" (the button is shown as a regular link without borders). Apps may use theme-specific colors for the button background and text based on the style. The style "link" is allowed only for callback buttons.|
|url|String|*Optional*. HTTP or tg:// URL to be opened when the button is pressed. Links `tg://user?id=<user_id>` can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.|
|callback_data|String|*Optional*. Data to be sent in a [callback query](./callbackquery.md) to the bot when the button is pressed, 1-64 bytes|
|web_app|[WebAppInfo](./webappinfo.md)|*Optional*. Description of the [Web App](../../webapps.md) that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method [answerWebAppQuery](../methods/answerwebappquery.md). Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a business account.|
|login_url|[LoginUrl](./loginurl.md)|*Optional*. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the [Telegram Login Widget](../../widgets/login.md). Not supported for ephemeral messages.|
|switch_inline_query|String|*Optional*. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a business account.|
|switch_inline_query_current_chat|String|*Optional*. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a business account.|
|switch_inline_query_chosen_chat|[SwitchInlineQueryChosenChat](./switchinlinequerychosenchat.md)|*Optional*. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a business account.|
|copy_text|[CopyTextButton](./copytextbutton.md)|*Optional*. A button that copies the specified text to the clipboard|
|disabled|[DisabledButton](./disabledbutton.md)|*Optional*. If set, then the button is disabled and does nothing|
