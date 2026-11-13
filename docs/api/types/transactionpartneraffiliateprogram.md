# TransactionPartnerAffiliateProgram

> Part of the [Telegram Bot API](../../api.md). Canonical location: [TransactionPartnerAffiliateProgram](../../api.md#transactionpartneraffiliateprogram).

Describes the affiliate program that issued the affiliate commission received via this transaction.

|Field|Type|Description|
|-----------|
|type|String|Type of the transaction partner, always "affiliate_program"|
|sponsor_user|[User](./user.md)|*Optional*. Information about the bot that sponsored the affiliate program|
|commission_per_mille|Integer|The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users|
