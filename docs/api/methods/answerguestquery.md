# answerGuestQuery

> Part of the [Telegram Bot API](../../api.md). Canonical location: [answerGuestQuery](../../api.md#answerguestquery).

Use this method to reply to a received guest message. On success, a [SentGuestMessage](../types/sentguestmessage.md) object is returned.

|Parameter|Type|Required|Description|
|-----------|
|guest_query_id|String|Yes|Unique identifier for the query to be answered|
|result|[InlineQueryResult](../types/inlinequeryresult.md)|Yes|A JSON-serialized object describing the message to be sent|
