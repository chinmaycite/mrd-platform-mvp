# MVP plan

## Product vision

Build a first-version platform that helps a clinical lab run MRD testing in-house with a small number of supported workflows and a clear physician-facing report.

## MVP goals

The MVP should show that the product can:

- accept sample data from a lab
- process common MRD assay data
- detect residual disease in a standardized way
- highlight quality control and confidence levels
- output a clean report with patient-friendly clinical interpretation
- support a pilot lab as a validation partner

## In-scope features for the MVP

### 1. Sample ingestion

- create a patient or specimen record
- upload raw sequencing files
- attach metadata such as sample type, collection date, and assay type

### 2. Pipeline orchestration

- trigger AWS Step Functions workflows
- process input files in a reproducible pipeline
- run the analysis in a structured sequence

### 3. MRD analytics

Support a focused set of workflows, such as:

- BCR/TCR repertoire analysis
- variant calling
- clone tracking over time
- limit-of-detection estimation

### 4. QC and validation

- check read depth and quality thresholds
- identify low-confidence results
- flag unusual outputs for review

### 5. Clinical reporting UI

- dashboard for sample status
- clonal frequency chart over time
- MRD trend visualization
- concordance comparison between methods
- physician-ready summary

### 6. Data storage and compliance

- store samples and results in a secure database
- support HIPAA-aware data handling patterns
- create clear data access and audit basics

## Out of scope for MVP

The MVP should not try to support every assay, every modality, and every reporting custom rule from day one. It should focus on a smaller, high-value slice.

Examples of out-of-scope items:

- full enterprise-wide multi-site support
- all possible assay formats
- broad LDT customization modules
- deep billing integrations
- full regulatory documentation set

## MVP success metrics

The MVP is successful if it can demonstrate:

- successful processing of sample files end-to-end
- correct result generation for benchmark test cases
- clear and understandable clinical output
- acceptable turnaround time for pilot use
- value feedback from two or three early-adopter labs

## Product strategy

The MVP should be designed around a pilot customer strategy:

- talk to lab directors
- learn the workflows they actually use
- prioritize based on real pain points
- build a narrow feature set that solves a known problem
- validate outputs against published benchmarks and orthogonal methods

## Core problem it solves

The company is trying to replace slow, expensive send-out MRD testing with a faster, on-premise and cloud-integrated analysis platform that labs can run themselves.
