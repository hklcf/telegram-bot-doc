# PassportData

> Part of the [Telegram Bot API](../../api.md). Canonical location: [PassportData](../../api.md#passportdata).

Describes Telegram Passport data shared with the bot by the user.

|Field|Type|Description|
|-----------|
|data|Array of [EncryptedPassportElement](./encryptedpassportelement.md)|Array with information about documents and other Telegram Passport elements that was shared with the bot|
|credentials|[EncryptedCredentials](./encryptedcredentials.md)|Encrypted credentials required to decrypt the data|
