---
title: Configuration & Kraken Browsers
description: Learn about Configuration & Kraken Browsers
---

# {% $markdoc.frontmatter.title %}

## Introduction

Web Integration mode relies on two browsers we call Kraken Browser and Configuration Browser. Kraken Browser will render the content and send it to your Kraken device and Configuration Browser will be the entrypoint for the user of your application to change any options or interaction you provide.

The browsers share common session data which means state can be fully controlled by the web integration with the supplied URL.

{% side-by-side %}

{% image src="/images/screenshots/configuration-browser-example.png" alt="Web Integration Mode" height=450 / %}
{% image src="/images/screenshots/kraken-browser-example.png" alt="Web Integration Mode" height=450 / %}

{% /side-by-side %}

## Configuration Browser

In this browser, users may authenticate with your service or adjust settings on how and which content should be displayed on the Kraken Browser.
Between these browsers, the same session data is inherited and shared as they both have the same origin. This means that any changes made to session data in one renderer process will be reflected in the other renderer process as well. This browser is not strictly necessary if your web integration does not require any setup.

## Kraken Browser

This hidden browser is created by CAM when enabling Web Integration Mode. The Kraken Browser is based on the URL of the application with the addition of the query parameter `?kraken=1` supplied by CAM. This query parameter differentiates the Kraken Browser and the Configuration Browser and should be used by your application to determine what content should be displayed.

```ts
const searchParams = new URLSearchParams(window.location.search);
const kraken = searchParams.get("kraken");
// "1"
```

## Cookies

In addition to the query parameter supplied by Kraken Browser, CAM will also inject a cookie called `viewstate` into session. This cookie contains the resolution of the current Kraken device. It is recommended to use this cookie to determine the resolution of the Kraken device and adjust your application's view accordingly.

```ts
const viewstate = getCookie("viewstate");
// "640"
```

## Communication

Web Integration mode does **not** track navigations. If the user navigates to a different url or path, the Kraken Browser will not update.

Communication between Kraken Browser and the Configuration browser has to be through session.
The easiest way to communication session data is with the following APIs (Note: Only browser APIs that exist on Chromium are supported).

[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[cookies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

```ts
const kraken = window.location.search.includes("kraken=1");
if (kraken) {
  // On Kraken Browser
  window.addEventListener("storage", (event) => {
    if (event.key === "greeting") {
      console.log(event.newValue);
    }
  });
} else {
  // On Configration Browser
  window.localStorage.setItem("greeting", "hello from kraken");
}
// Kraken and Configuration Browsers
```

In snippet above, you can see that we are differentiating between the Kraken Browser and the Configuration Browser using the query parameter `kraken`.
If this query parameter is present, we are on the Kraken Browser. Otherwise, we are on the Configuration Browser.

On the Kraken Browser, we are setting a listener on `window` to listen to any changes to the `greeting` key in local storage. When the Configuration Browser sets the `greeting` key, the Kraken Browser will log the value.

On the Configuration Browser, we are setting the `greeting` key in local storage.

## Let's Recap

1. Configuration Browser is the entry point where user's can interact, and will not be given a query parameter.
2. Kraken Browser displays on the Kraken device and is can be identified by a kraken query parameter injected into the url from CAM.
3. Both browsers share session data. Session data examples include cookies and local storage.
4. CAM provides the `viewstate` cookie to session so your application input to CAM can determine the resolution of the Kraken device.
5. CAM provides the query parameter `kraken="1"` to the Kraken Browser, so views can be differentiated between the Kraken Browser and the Configuration Browser.

## Next Steps

Check out some of our Web Integration Examples

- [Spotify Now Playing](https://github.com/NZXTCorp/web-integrations/tree/main/spotify-album-art)
- [Google Photo Album Slideshow](https://github.com/NZXTCorp/web-integrations/tree/main/google-photos-slideshow)
- [Unsplash Random Photo](https://github.com/NZXTCorp/web-integrations/tree/main/unsplash-slideshow)
- [Youtube Video](https://github.com/NZXTCorp/web-integrations/tree/main/youtube-embed)
