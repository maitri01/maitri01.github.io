---
title: "Watermark Degradation Across Model Iterations"
eyebrow: "ACM IH&MMSec 2026 \u00b7 pp. 177\u2013182"
subtitle: "Tracing watermark signals as generated images become training data."
parent:
  title: All research
  url: /research/
---


**M. Meintz, Maitri Vignesh Shah, B. Zhao, L. Kerner, F. Boenisch, A. Dziedzic**

[Read the publication](https://doi.org/10.1145/3785353.3815071) · [CISPA publication record](https://cispa.de/en/research/publications/213284-watermark-degradation-across-model-iterations)

![Concept diagram of watermark signals fading across iterations](/images/iterations.svg)

## How long do watermark signals survive?

This paper studies the persistence of watermark signals across model iterations, as generated images are reused to train subsequent models.

It uses **dataset inference** to combine weak signals across images and trace watermarked training data through model generations. The experiments find that one method remains detectable with just **1% watermarked training data**, while other methods degrade.

## Research context

I co-authored this work as part of my research on watermarking and data provenance. It examines a practical limitation of provenance tools: a signal that is detectable in an original image may become much harder to identify after a model has learned from it.
