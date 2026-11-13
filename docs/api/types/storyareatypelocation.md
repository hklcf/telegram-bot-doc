# StoryAreaTypeLocation

> Part of the [Telegram Bot API](../../api.md). Canonical location: [StoryAreaTypeLocation](../../api.md#storyareatypelocation).

Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.

|Field|Type|Description|
|-----------|
|type|String|Type of the area, always "location"|
|latitude|Float|Location latitude in degrees|
|longitude|Float|Location longitude in degrees|
|address|[LocationAddress](./locationaddress.md)|*Optional*. Address of the location|
