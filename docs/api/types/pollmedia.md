# PollMedia

> Part of the [Telegram Bot API](../../api.md). Canonical location: [PollMedia](../../api.md#pollmedia).

At most **one** of the optional fields can be present in any given object.

|Field|Type|Description|
|-----------|
|animation|[Animation](./animation.md)|*Optional*. Media is an animation, information about the animation|
|audio|[Audio](./audio.md)|*Optional*. Media is an audio file, information about the file; currently, can't be received in a poll option|
|document|[Document](./document.md)|*Optional*. Media is a general file, information about the file; currently, can't be received in a poll option|
|link|[Link](./link.md)|*Optional*. The HTTP link attached to the poll option|
|live_photo|[LivePhoto](./livephoto.md)|*Optional*. Media is a live photo, information about the live photo|
|location|[Location](./location.md)|*Optional*. Media is a shared location, information about the location|
|photo|Array of [PhotoSize](./photosize.md)|*Optional*. Media is a photo, available sizes of the photo|
|sticker|[Sticker](./sticker.md)|*Optional*. Media is a sticker, information about the sticker; currently, for poll options only|
|venue|[Venue](./venue.md)|*Optional*. Media is a venue, information about the venue|
|video|[Video](./video.md)|*Optional*. Media is a video, information about the video|
