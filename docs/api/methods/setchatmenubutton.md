# setChatMenuButton

> Part of the [Telegram Bot API](../../api.md). Canonical location: [setChatMenuButton](../../api.md#setchatmenubutton).

Use this method to change the bot's menu button in a private chat, or the default menu button. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer|Optional|Unique identifier for the target private chat. If not specified, the bot's default menu button will be changed.|
|menu_button|[MenuButton](../types/menubutton.md)|Optional|A JSON-serialized object for the bot's new menu button. Defaults to [MenuButtonDefault](../types/menubuttondefault.md).|
