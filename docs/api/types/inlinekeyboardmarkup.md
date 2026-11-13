# InlineKeyboardMarkup

> Part of the [Telegram Bot API](../../api.md). Canonical location: [InlineKeyboardMarkup](../../api.md#inlinekeyboardmarkup).

This object represents an [inline keyboard](../../features.md#inline-keyboards) that appears right next to the message it belongs to.

|Field|Type|Description|
|-----------|
|inline_keyboard|Array of Array of [InlineKeyboardButton](./inlinekeyboardbutton.md)|Array of button rows, each represented by an Array of [InlineKeyboardButton](./inlinekeyboardbutton.md) objects|
|force_reply|Boolean|*Optional*. Pass *True* if the reply interface must be shown to the user, as if they had manually selected the bot's message and tapped 'Reply'. The value of the field can't be changed when the inline keyboard is edited.|
