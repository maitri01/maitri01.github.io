---
title: "RADIUM"
eyebrow: "NeurIPS 2026 \u00b7 Accepted"
subtitle: "RadioActive Decay of Image-Underlaid Marks"
parent:
  title: All research
  url: /research/
---


**Michel Meintz, Louis Kerner, Maitri Vignesh Shah, Simon Hector, Franziska Boenisch, Adam Dziedzic**

[Read the paper](https://adam-dziedzic.com/static/assets/papers/radium.pdf) · [View the code](https://github.com/sprintml/Radium)

![Concept diagram of watermark radioactivity detection](/images/radioactivity.svg)

## Can watermarked images leave a trace in a new model?

RADIUM introduces a novel method for detecting **watermark radioactivity**. When watermarked images are reused as training data, their signals may carry through to a new generative model. The paper investigates whether those traces can reveal the model's training-data provenance.

The method uses anytime-valid statistical testing to accumulate evidence of radioactivity. Evaluation across seven watermarking methods examines how repeated training and architecture changes affect the signal.

## My contribution

I built the full **Infinity training and evaluation setup**, including dataset preparation, model configuration, and fine-tuning parameters. I integrated selected watermarking methods and ran GPU experiments.

I also carried out the image-quality experiments using FID and CLIP scores, developed evaluation code, and contributed to the e-value testing setup.

## Why it matters

Watermark detection in an image and radioactivity detection in a trained model answer different questions. RADIUM studies the latter: whether watermarked training images leave a detectable trace after learning and regeneration.
