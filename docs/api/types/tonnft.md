# TonNft

> Part of the [Telegram Bot API](../../api.md). Canonical location: [TonNft](../../api.md#tonnft).

This object represents an NFT in the TON blockchain.

|Field|Type|Description|
|-----------|
|address|String|Address of the NFT|
|collection_address|String|*Optional*. Address of the collection to which the NFT belongs; omitted if unknown|
|index|String|Index of the NFT among all NFTs from the collection as a decimal number|
|name|String|Name of the NFT|
|description|String|Description of the NFT|
|attributes|Array of [TonNftAttribute](./tonnftattribute.md)|*Optional*. Attributes of the NFT|
|gift|[UniqueGift](./uniquegift.md)|*Optional*. The unique gift corresponding to the NFT|
