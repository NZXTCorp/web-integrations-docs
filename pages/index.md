---
title: Customize your Kraken
description: Make stunning visualizations and display them directly on your Kraken
---

{% section .hero .no-background .white-text %}

> Use NZXT CAM's Web Integration Mode to stream web applications directly to Kraken displays

[Supported devices](/docs/faq#supported-devices) {% .primary %}
{% video src="https://stream.mux.com/Un02D7xPL00fDjLRm01tzBU84q2US02YsWsW/high.mp4" width=100 height=100 className="home" / %}

{% section .no-background %}

{% table %}

---

- {% ascii "pencil" /%}

  {% item %}

  ### Development {% .jumbo %}

  > No external libaries required. Learn how the NZXT CAM will uses your application to display on Kraken.

  > [Learn more](/docs/browsers) {% .primary %}

  {% /item %}

- {% ascii "card" /%}

  {% item %}

  ### Accessibility {% .jumbo %}

  > With one click, users can immidiately start displaying your application on Kraken

  > [Setup](/docs/installation) {% .primary %}

  {% /item %}

---

{% /table %}

{% /section %}

{% /section %}

{% section .get-started .white-text %}

{% side-by-side %}

{% item %}

### Monitoring data from CAM {% .jumbo %}

Soon you will be able to create Web Integrations using monitoring data directly from NZXT CAM. Complete with Typescript definitions and a simple API. This will give you all the data you need to create interactive and informative displays.

{% /item %}

```shell
npm install @nzxtcorp/types
```

```js
import { PC } from "@nzxtcorp/types";

window.nzxt.v1.monitoringDataUpdate = (pc: PC) => {
  const { cpus } = pc;
  const cpu = cpus?.[0];

  if (cpu) {
    const { minTemperature, maxTemperature, temperature } = cpu;
    const range = maxTemperature - minTemperature;
    const position = (temperature - minTemperature) / range;
    cpuBar.setAttribute("temperature", `${position * 100}`);
  }
};
```

{% /side-by-side %}

{% /section %}

{% section .try .no-mobile %}

{% /section %}
