# setChatPhoto

> Part of the [Telegram Bot API](../../api.md). Canonical location: [setChatPhoto](../../api.md#setchatphoto).

Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|chat_id|Integer or String|Yes|Unique identifier for the target chat or username of the target channel in the format `@username`|
|photo|[InputFile](../types/inputfile.md)|Yes|New chat photo, uploaded using multipart/form-data|
