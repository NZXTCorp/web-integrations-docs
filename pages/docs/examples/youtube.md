---
title: Youtube Video
description: Embedding a YouTube video in a web integration.
---

# {% $markdoc.frontmatter.title %}

## {% $markdoc.frontmatter.description %}

The provided code is an HTML document that contains a container element and an embedded YouTube video. The container element is styled using CSS to take up the entire viewport and center its contents both vertically and horizontally. The video is also styled using CSS, with a width and height of 100% of the viewport and a transform property that scales up by a factor of 1.8.

The HTML document includes a script that dynamically adjusts the width, height, and video URL of the embedded YouTube video based on query parameters in the URL of the page. If the "viewstate" parameter is present, its value is used to set the width and height of the video. If a "video" parameter is present, the value is used to construct the URL of the YouTube video. If these parameters are not present, default values are used.

This easy to make application can be hosted on a web server and used as the URL of a web integration.

```html
<html>
  <head>
    <style>
      body {
        margin: 0;
      }
      .container {
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        transform-origin: 0 0;
      }
      .video {
        width: 100vw;
        height: 100vh;
        transform: scale(1.8);
        transform-origin: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <iframe
        id="video"
        class="video"
        width="640"
        height="640"
        src=""
        allow="autoplay;mute;fullscreen"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </body>
  <script type="text/javascript">
    const youtubeEmbedRoot =
      "https://www.youtube.com/embed/1km9XQSc0Yw?autoplay=1&loop=1&controls=0&mute=1";
    const params = new URL(window.location.href).searchParams;
    const viewstate = params.get("viewstate") || 640;

    const video = window.document.getElementById("video");
    video.setAttribute("width", viewstate);
    video.setAttribute("height", viewstate);

    const videoId = params.get("video") || "1km9XQSc0Yw";
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&controls=0&mute=1`;
    video.setAttribute("src", youtubeUrl);
  </script>
</html>
```
