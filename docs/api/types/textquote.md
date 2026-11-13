# TextQuote

> Part of the [Telegram Bot API](../../api.md). Canonical location: [TextQuote](../../api.md#textquote).

This object contains information about the quoted part of a message that is replied to by the given message.

|Field|Type|Description|
|-----------|
|text|String|Text of the quoted part of a message that is replied to by the given message; may be empty if the quote was chosen from a rich message|
|entities|Array of [MessageEntity](./messageentity.md)|*Optional*. Special entities that appear in the quote. Currently, only *bold*, *italic*, *underline*, *strikethrough*, *spoiler*, *custom_emoji*, and *date_time* entities are kept in quotes.|
|rich_texts|Array of [RichText](./richtext.md)|*Optional*. Rich text of the quote if it was chosen from a [rich message](./richmessage.md). May contain only plain text, [RichTextBold](./richtextbold.md), [RichTextItalic](./richtextitalic.md), [RichTextUnderline](./richtextunderline.md), [RichTextStrikethrough](./richtextstrikethrough.md), [RichTextSpoiler](./richtextspoiler.md), [RichTextSubscript](./richtextsubscript.md), [RichTextSuperscript](./richtextsuperscript.md), [RichTextDateTime](./richtextdatetime.md), [RichTextCustomEmoji](./richtextcustomemoji.md), [RichTextMathematicalExpression](./richtextmathematicalexpression.md), and arrays of them.|
|position|Integer|Approximate quote position in the original message in UTF-16 code units as specified by the sender. For quotes from rich messages, it is the position in the text formed by joining plain texts of all quotable texts of the message, separated by line feeds.|
|is_manual|True|*Optional*. *True*, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.|
