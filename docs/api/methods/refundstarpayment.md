# refundStarPayment

> Part of the [Telegram Bot API](../../api.md). Canonical location: [refundStarPayment](../../api.md#refundstarpayment).

Refunds a successful payment in [Telegram Stars](https://t.me/BotNews/90). Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|Identifier of the user whose payment will be refunded|
|telegram_payment_charge_id|String|Yes|Telegram payment identifier|
