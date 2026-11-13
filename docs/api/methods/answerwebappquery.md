# answerWebAppQuery

> Part of the [Telegram Bot API](../../api.md). Canonical location: [answerWebAppQuery](../../api.md#answerwebappquery).

Use this method to set the result of an interaction with a [Web App](../../webapps.md) and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a [SentWebAppMessage](../types/sentwebappmessage.md) object is returned.

|Parameter|Type|Required|Description|
|-----------|
|web_app_query_id|String|Yes|Unique identifier for the query to be answered|
|result|[InlineQueryResult](../types/inlinequeryresult.md)|Yes|A JSON-serialized object describing the message to be sent|
