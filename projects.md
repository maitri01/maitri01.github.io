---
title: "Projects"
layout: single
permalink: /projects/
---

This page is a deeper dive into the projects I’ve worked on — going beyond what fits on a CV. Each project highlights the motivation, process, and lessons learned, with links to code and resources.

---

### QuadTransport — Efficient Optimal Transport

During my B.Tech capstone, I worked under the mentorship of Dr. Sharath Raghvendra to make Wasserstein Distance computation more practical for large datasets. The classic Hungarian algorithm worked but was slow — around 35 minutes for our input size. Through profiling and iterative improvements, I optimized the algorithm with a quad-tree structure, bringing the runtime down to **12 seconds (about 50× faster)**.

**Lessons Learned:** Algorithmic thinking is just as important as coding — identifying bottlenecks gave bigger speedups than hardware.

GitHub: https://github.com/maitri01

---

### Intraday Trading Signals (LSTM)

This project explored financial modeling using LSTMs. I integrated common indicators like SMA, RSI, and MACD into the feature set, and after many tuning iterations, the model achieved an **average ROI of 20% on validation splits**.

**Lessons Learned:** Finance data is noisy — avoiding overfitting required careful cross-validation and conservative evaluation.

GitHub: [Repository](https://github.com/maitri01/Intraday-Trading-Signals-using-a-Classification-LSTM-Model)

---

### Trust & Tag-Aware Recommendation System

Inspired by research papers on social trust in recommender systems, I built a hybrid model using sparse auto-encoders. The dataset (Last.fm) was highly sparse, and encoding trust/tag information significantly improved recommendation accuracy.

**Lessons Learned:** Sparsity is one of the toughest challenges in recommendation — side information like trust and tags can dramatically improve model performance.

GitHub: [Repository](https://github.com/maitri01/Trust-and-Tag-aware-Recommendation-Systems)

---

### Biometric Identification System

The aim was robustness: a system that could still function if one modality (like face) was missing. I combined **RGB + Thermal face images** with **voice signals**, extracting features using Local Ternary Patterns (LTP) and MFCCs. The multimodal approach outperformed single-input models.

**Lessons Learned:** Multimodal fusion is powerful but preprocessing and feature alignment took more effort than model building.

GitHub: [Repository](https://github.com/maitri01/BiometricsFeatureFusion)

---

### Mobile Price Classification

A diagnostic analytics project where I compared ML models on mobile price categories. By adding feature selection and hyperparameter tuning, the best-performing model (SVM) achieved **98% F1-score**.

**Lessons Learned:** For structured data, classical ML with proper tuning often beats deep learning.

GitHub: [Repository](https://github.com/maitri01/Data-Analysis-on-Mobile-Price-Classification)

---

### YouTube Textual Analysis

This project explored correlations in YouTube features and used NLP models for sentiment analysis. Transformers were used for classification, while Random Forests performed well for engagement prediction.

**Lessons Learned:** Feature engineering and ensembles often provide stronger baselines than directly applying deep models.

GitHub: [Repository](https://github.com/maitri01/YouTube-Views-Prediction)

---

### Closing Note

More details and ongoing work are updated regularly on my GitHub profile: [maitri01](https://github.com/maitri01)

