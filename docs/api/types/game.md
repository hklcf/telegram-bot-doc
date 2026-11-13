# Game

> Part of the [Telegram Bot API](../../api.md). Canonical location: [Game](../../api.md#game).

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

|Field|Type|Description|
|-----------|
|title|String|Title of the game|
|description|String|Description of the game|
|photo|Array of [PhotoSize](./photosize.md)|Photo that will be displayed in the game message in chats|
|text|String|*Optional*. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](../methods/setgamescore.md), or manually edited using [editMessageText](../methods/editmessagetext.md). 0-4096 characters.|
|text_entities|Array of [MessageEntity](./messageentity.md)|*Optional*. Special entities that appear in *text*, such as usernames, URLs, bot commands, etc.|
|animation|[Animation](./animation.md)|*Optional*. Animation that will be displayed in the game message in chats. Upload via [BotFather](https://t.me/botfather).|
