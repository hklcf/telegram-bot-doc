# getUserProfileAudios

> Part of the [Telegram Bot API](../../api.md). Canonical location: [getUserProfileAudios](../../api.md#getuserprofileaudios).

Use this method to get a list of profile audios for a user. Returns a [UserProfileAudios](../types/userprofileaudios.md) object.

|Parameter|Type|Required|Description|
|-----------|
|user_id|Integer|Yes|Unique identifier of the target user|
|offset|Integer|Optional|Sequential number of the first audio to be returned. By default, all audios are returned.|
|limit|Integer|Optional|Limits the number of audios to be retrieved. Values between 1-100 are accepted. Defaults to 100.|
