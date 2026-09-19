# Technical architecture plan

## High-level architecture

The product should follow a cloud-native architecture with the ability to orchestrate distributed bioinformatics workloads and expose a clinical interface for users.

## Core components

### 1. Workflow orchestration

Use AWS Step Functions to orchestrate the MRD workflow.

Responsibilities:

- receive incoming samples
- validate input files
- trigger compute jobs
- chain processing steps in a reliable workflow
- catch errors and publish status updates

### 2. Bioinformatics processing layer

This layer runs the actual analysis tasks, such as:

- alignment
- variant calling
- clonotype identification
- clone tracking
- MRD quantification

This is the scientific core of the system.

### 3. Data storage

Use PostgreSQL-compatible storage (for example Aurora) for:

- patient and specimen metadata
- assay configuration
- run outputs
- QC metrics
- final clinical result records

### 4. Clinical web application

A React frontend should provide:

- sample dashboard
- report viewing interface
- MRD trend chart
- quality control overview
- concordance visualization

### 5. Reporting layer

This layer converts technical outputs into physician-friendly summaries and structured clinical results.

### 6. Validation and QA tooling

This includes scripts to compare pipeline results across:

- orthogonal methods
- known benchmark references
- published performance thresholds

## Suggested technology stack

- Frontend: React
- Visualization: D3.js or charting components
- Workflow orchestration: AWS Step Functions
- Cloud compute: AWS ECS, Lambda, or batch-style compute depending on pipeline needs
- Database: PostgreSQL / Aurora
- Bioinformatics ecosystem: standard alignment and variant-calling tools plus custom Python or Nextflow-like orchestration patterns
- Data handling: secure object storage and controlled access patterns

## Architectural principle

The system should separate three concerns:

1. data acquisition and sample tracking
2. analytic pipeline execution
3. clinician-facing reporting and interpretation

This makes the platform easier to validate and easier to evolve.

## Minimal MVP architecture

For startup validation, a realistic first version would be:

- React app for lab users and physician reporting
- API layer for orchestration and result retrieval
- Step Functions for pipeline jobs
- Aurora/PostgreSQL for structured metadata
- S3 or equivalent storage for raw and processed files
- QC and report generation scripts for the initial assay set

## Important note

This is a clinical product, so architecture decisions should prioritize:

- reproducibility
- traceability
- security
- data integrity
- auditability

