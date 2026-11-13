# getStarTransactions

> Part of the [Telegram Bot API](../../api.md). Canonical location: [getStarTransactions](../../api.md#getstartransactions).

Returns the bot's Telegram Star transactions in chronological order. On success, returns a [StarTransactions](../types/startransactions.md) object.

|Parameter|Type|Required|Description|
|-----------|
|offset|Integer|Optional|Number of transactions to skip in the response|
|limit|Integer|Optional|The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.|
