# MenuButtonWebApp

> Part of the [Telegram Bot API](../../api.md). Canonical location: [MenuButtonWebApp](../../api.md#menubuttonwebapp).

Represents a menu button, which launches a [Web App](../../webapps.md).

|Field|Type|Description|
|-----------|
|type|String|Type of the button, must be *web_app*|
|text|String|Text on the button|
|web_app|[WebAppInfo](./webappinfo.md)|Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method [answerWebAppQuery](../methods/answerwebappquery.md). Alternatively, a `t.me` link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.|
