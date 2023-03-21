---
title: Web Integrations for the NZXT Kraken Series
description: Make stunning visualizations and display them directly on your NZXT Kraken
---

{% section .hero .no-background .white-text %}

# {% $markdoc.frontmatter.title %}

> Use NZXT CAM's Web Integration Mode to stream custom web integrations directly to NZXT Kraken displays.

[See supported devices](/docs/faq#supported-devices) {% .primary %}
{% video src="https://stream.mux.com/Un02D7xPL00fDjLRm01tzBU84q2US02YsWsW/high.mp4" width=100 height=100 className="home" / %}

{% section .no-background .text-shadow %}

{% table %}

---

- {% ascii "pencil" /%}

  {% item %}

  ### Development {% .jumbo %}

  > It's easy to make your own custom web integration - all you need is some knowledge of HTML, CSS, and/or Javascript. No external libraries are required!

  > [Get Started](/docs/browsers) {% .primary %}

  {% /item %}

- {% ascii "card" /%}

  {% item %}

  ### Share with the community {% .jumbo %}

  > With one click, users can immediately displaying your web integration on their NZXT Kraken series AIO liquid cooler.

  > [Display a custom web integration](/docs/installation) {% .primary %}

  {% /item %}

---

{% /table %}

{% /section %}

{% /section %}

{% section .get-started .white-text %}

{% side-by-side %}

{% item %}

### NZXT CAM Monitoring Data {% .jumbo %}

Want to create a web integration using NZXT CAM monitoring data? We provide a simple API with Typescript definitions directly from NZXT CAM - so you can build engaging and informative visualizations.

{% /item %}

```shell
npm install @nzxt/web-integrations-types
```

```js
import { MonitoringData } from "@nzxt/web-integrations-types/v1";

window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data: MonitoringData) => {
      const { cpus, gpus, ram } = data;

      // build cool visualizations with this data!
    }
  }
};
```

{% /side-by-side %}

{% /section %}

{% section .try .no-mobile %}
