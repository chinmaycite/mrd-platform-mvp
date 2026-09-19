# Allovista MRD Platform MVP

This repository captures the MVP plan for an in-house clinical MRD platform that lets hospitals and clinical labs run advanced oncology testing without sending samples to external labs.

## Project goal

The company wants to build a cloud and bioinformatics platform that can:

- process blood and tissue samples from clinical labs
- run MRD workflows for BCR/TCR, RNA-seq, and mass spectrometry inputs
- detect disease traces with consistent, auditable quality control
- generate physician-facing reports with trend lines and concordance scores
- keep data secure and compliant for clinical use

## What this means in simple terms

Instead of sending samples to expensive external labs and waiting days or weeks, the lab runs the analysis in-house using automated software. The platform takes raw sequencing files, runs bioinformatics pipelines, checks whether the results are trustworthy, and produces a clinical report with key findings for the doctor.

## MVP outcome

The MVP should prove that the platform can:

1. Ingest sample data from a lab
2. Run a basic MRD workflow end-to-end
3. Produce a report showing presence or absence of residual disease
4. Show trend over time and QC metrics
5. Support a small number of customer labs for pilot validation

## Repository contents

- [docs/01-requirement-explained-easily.md](docs/01-requirement-explained-easily.md): plain-English explanation of the role and business need
- [docs/02-mvp-plan.md](docs/02-mvp-plan.md): MVP scope, problems addressed, and deliverables
- [docs/03-technical-architecture.md](docs/03-technical-architecture.md): technical architecture and stack plan
- [docs/04-roadmap.md](docs/04-roadmap.md): phased roadmap and hiring priorities
- [docs/05-user-stories.md](docs/05-user-stories.md): feature backlog in product language

## Suggested MVP user

The ideal first customer is a clinical lab or hospital-affiliated oncology lab using MRD testing and looking to reduce cost, turnaround time, and dependency on send-out vendors.

## MVP focus

The first version should not try to support every assay at once. It should focus on one or two highly valuable workflows, such as:

- BCR/TCR repertoire analysis
- variant calling and MRD quantification
- a clean reporting UI showing clone frequency and trend over time

## Next step

Use this repository as a starting point for a GitHub project, then convert the MVP plan into an actual application skeleton with code, infrastructure, and validation scripts.

