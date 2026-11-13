# ChatShareThemeEmoji

> Part of the [Telegram Bot API](../../api.md). Canonical location: [ChatShareThemeEmoji](../../api.md#chatsharethemeemoji).

The theme with emoji placed on a background.

|Field|Type|Description|
|-----------|
|type|String|Type of the theme, always "emoji"|
|emojis|Array of [EmojiType](./emojitype.md)|The emoji; 0-6 regular or custom emoji|
|background_backdrop_id|Integer|*Optional*. Identifier of the backdrop used as the background; omitted if the default background is used. Use [getChatShareThemeBackdrops](../methods/getchatsharethemebackdrops.md) to get details about the backdrop.|
