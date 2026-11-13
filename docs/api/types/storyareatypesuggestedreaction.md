# StoryAreaTypeSuggestedReaction

> Part of the [Telegram Bot API](../../api.md). Canonical location: [StoryAreaTypeSuggestedReaction](../../api.md#storyareatypesuggestedreaction).

Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.

|Field|Type|Description|
|-----------|
|type|String|Type of the area, always "suggested_reaction"|
|reaction_type|[ReactionType](./reactiontype.md)|Type of the reaction|
|is_dark|Boolean|*Optional*. Pass *True* if the reaction area has a dark background|
|is_flipped|Boolean|*Optional*. Pass *True* if reaction area corner is flipped|
