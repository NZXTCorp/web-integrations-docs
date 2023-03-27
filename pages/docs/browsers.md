---
title: Configuration & Kraken Browsers
description: Learn about Configuration & Kraken Browsers
---

# {% $markdoc.frontmatter.title %}

## Introduction

Web Integration mode relies on two browsers called Kraken Browser and Configuration Browser. Kraken Browser will be used to render the content on the Kraken device and the other browser Configuration Browser will be the entrypoint for the user of your application.
The browsers share common session data which means state can be fully controlled by the web integration with the supplied URL.

## Kraken Browser

This hidden Kraken browser is created by CAM when entering into Web Integration Mode. The Kraken Browser is based on the URL of the application with the addition of a query parameter `kraken="1"` supplied by CAM. This query parameter is used to differentiate between the Kraken Browser and the Configuration Browser and should be used to determine what content should be displayed.

```ts
const searchParams = new URLSearchParams(window.location.search);
const kraken = searchParams.get("kraken");
// "1"
```

### CAM Provided Cookies

In addition to the query parameter supplied by Kraken Browser, CAM will also inject a cookie called `viewstate` into session. This cookie contains the resolution of the current Kraken device. It can be used to help assist the design of the application from the Kraken Browser view.

```ts
const viewstate = getCookie("viewstate");
// "640"
```

## Configuration Browser

The configuration browser is where the user will interact directly with your application.
In this view, users may authenticate with your service or adjust settings on how and which content should be displayed on the Kraken Browser.
Between these browsers, the same session data is inherited and shared as they both have the same origin. This means that any changes made to session data in one renderer process will be reflected in the other renderer process as well. This browser is not strictly necessary if your web integration does not require any configuration.

## Communication

Web Integration mode does **not** track navigations. If the user navigates to a different url or path, the Kraken Browser will not be updated.

The main means of communication between Kraken Browser and the Configuration browser is through session.
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

1. The Kraken Browser displays on the Kraken device and is can be identified by a kraken query parameter injected into the url from CAM.
2. The Configuration Browser is the entry point where user's can interact, and will not be given a query parameter.
3. Both browsers share session data. Session data examples include cookies and local storage.
4. CAM provides a `viewstate` cookie to session so your application input to CAM can determine the resolution of the Kraken device.
5. CAM provides a query parameter `kraken="1"` so you can differentiate behaviors, and views between the Kraken Browser and the Configuration Browser.

## Next Steps

Check out some of our Web Integration Examples

- [Spotify Now Playing](/docs/examples/spotify)
- [Google Photo Album Slideshow](/docs/examples/google)
- [Unsplash Random Photo](/docs/examples/unsplash)
- [Youtube Video](/docs/examples/youtube)
