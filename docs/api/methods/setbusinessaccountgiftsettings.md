# setBusinessAccountGiftSettings

> Part of the [Telegram Bot API](../../api.md). Canonical location: [setBusinessAccountGiftSettings](../../api.md#setbusinessaccountgiftsettings).

Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the *can_change_gift_settings* business bot right. Returns *True* on success.

|Parameter|Type|Required|Description|
|-----------|
|business_connection_id|String|Yes|Unique identifier of the business connection|
|show_gift_button|Boolean|Yes|Pass *True* if a button for sending a gift to the user or by the business account must always be shown in the input field|
|accepted_gift_types|[AcceptedGiftTypes](../types/acceptedgifttypes.md)|Yes|Types of gifts accepted by the business account|
