---
title: Customize your Kraken
description: From personal blogs to massive documentation sites, Markdoc is a content authoring system that grows with you.
---

{% section .hero %}

> Use NZXT CAM's Web Integration Mode to stream web applications directly to Kraken displays

[Supported devices](/docs/getting-started) {% .primary %}

[See our docs](/docs/getting-started) {% .primary %}

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

## Quick Start {% .jumbo %}

Provided is a TypeScript package for monitoring data to provide better code editor support.
This package includes all necessary type definitions for the Monitoring data and Kraken's display resolution.

{% /item %}

```shell
npm install @nzxtcorp/types
```

```js
import { PCMonitor, PCMonitorKey } from "@nzxtcorp/types";

let pc: PCMonitor | undefined;

window.addEventListener("storage", (e: StorageEvent) => {
  if (e.key === PCMonitorKey) {
    pc = JSON.parse(e.newValue);
  }
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
