---
title: "LLM unlearning"
eyebrow: "Trustworthy machine learning \u00b7 Seminar project"
subtitle: "Evaluating targeted forgetting and its effect on model utility."
parent:
  title: All projects
  url: /projects/
---


## Research question

How can a language model reduce its reliance on selected training data while retaining useful behaviour on the data it should remember?

This seminar project explored unlearning in **OLMo-2 autoregressive language models**, examining the relationship between forgetting, privacy, and retained utility.

## Approach

I evaluated **gradient ascent**, gradient ascent with a **KL-divergence constraint**, and **sequential gradient ascent**. The work used membership inference alongside utility evaluation to examine whether changes to the model reduced evidence of the targeted data.

## What the evaluation showed

Improved forgetting could come with a loss of utility. The evaluation therefore considered privacy and retained model performance together, examining the trade-offs produced by each update strategy.
