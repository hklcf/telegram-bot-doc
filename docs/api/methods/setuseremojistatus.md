# setUserEmojiStatus

> Part of the [Telegram Bot API](../../api.md). Canonical location: [setUserEmojiStatus](../../api.md#setuseremojistatus).

Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method [requestEmojiStatusAccess](../../webapps.md#initializing-mini-apps). Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|Unique identifier of the target user|
|emoji_status_custom_emoji_id|String|Optional|Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.|
|emoji_status_expiration_date|Integer|Optional|Expiration date of the emoji status, if any|
