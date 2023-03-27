---
title: Customize your Kraken
description: Make stunning visualizations and display them directly on your Kraken
---

{% section .hero %}

> Use NZXT CAM's Web Integration Mode to stream web applications directly to Kraken displays

[Supported devices](/docs/faq#supported-devices) {% .primary %}

{% section %}

{% table %}

---

- {% ascii "pencil" /%}

  {% item %}

  ### Easy Development {% .jumbo %}

  No external libaries required. See how CAM communicates with browsers.

  {% /item %}

- {% ascii "card" /%}

  {% item %}

  ### Data {% .jumbo %}

  Access CAM's PC Monitoring data so you can create stunning visualizations at game time

  {% /item %}

- {% ascii "card" /%}

  {% item %}

  ### Accessible {% .jumbo %}

  With one click, users can immidiately start displaying your application on Kraken

  {% /item %}

---

{% /table %}

{% /section %}

{% /section %}

{% section .get-started %}

{% side-by-side %}

{% item %}

## Coming Soon {% .jumbo %}

Create Web Integrations using PC Monitoring data that comes straight from CAM.

{% /item %}

```shell
npm install @nzxtcorp/types
```

```js
import { PC, PCMonitor } from "@nzxtcorp/types";

let data: PCMonitor | undefined;

PCMonitor("v1", (pc) => {
  data = pc;
});

const cpu = pc?.cpus[0];
if (!cpu) return;
const range = cpu.maxTemperature - cpu.minTemperature;
const position = (cpu.temperature - cpu.minTemperature) / range;

cpuBar.setAttribute("temperature", position * 100);
```

{% /side-by-side %}

{% /section %}

{% section .try .no-mobile %}

{% /section %}
