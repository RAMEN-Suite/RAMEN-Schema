# RAMEN SCHEMA

Documentation website for **RAMEN** — the *Reusable Abstraction Model for Editorial Needs*.

## Overview

RAMEN SCHEMA documents the core concepts of RAMEN and explains how they can be used to model editorial data in digital scholarly editing.

RAMEN provides a conceptual structure for describing content, annotations, entities, collections, and their relations. The documentation is intended for researchers, editors, developers, and Digital Humanities projects that work with structured editorial data.

The site is built with [Docusaurus](https://docusaurus.io/).

## Features

- Conceptual documentation for RAMEN
- Markdown/MDX-based documentation content
- Docusaurus-powered static website

## Installation

### Requirements

- Node.js `>=20`
- npm

Check your local versions:

```bash
node --version
npm --version
```

Install dependencies:

```bash
npm install
```

## Usage

Start the local development server:

```bash
npm start
```

This opens the documentation site in your browser. Most changes to Markdown, React components, and configuration files are reflected automatically while the development server is running.

## Configuration

The main configuration files are:

```text
docusaurus.config.ts   # Main Docusaurus configuration
sidebars.ts            # Documentation sidebar configuration
```

Static assets such as logos and images are stored in:

```text
static/
```

Documentation content is written in Markdown or MDX inside:

```text
docs/
```

## Development

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run serve
```

The generated static site is written to:

```text
build/
```

## Project Structure

```text
.
├── docs/                  # Documentation pages
├── src/                   # Custom React components and CSS
├── static/                # Static assets such as logos and images
├── docusaurus.config.ts   # Main Docusaurus configuration
├── sidebars.ts            # Documentation sidebar configuration
├── package.json           # Project scripts and dependencies
└── README.md
```

## Contributing

Contributions are welcome once the documentation structure has stabilised.

For now, please open an issue or pull request with suggested changes.

## License

The documentation content in this repository is licensed under the
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

You are free to share and adapt the material, provided that appropriate credit is given.

Code snippets, configuration files, and build-related project files are included for documentation purposes unless stated otherwise.

## Maintainers / Contact

RAMEN SCHEMA is maintained by the RAMEN project contributors.

- Sebastian Enns — <[sebastian.enns@mni.thm.de](mailto:sebastian.enns@mni.thm.de)>
- Maximilian Michel — <[maximilian.michel@adwmainz.de](mailto:maximilian.michel@adwmainz.de)>
- Vincent Neeb — <[vincent.neeb@mni.thm.de](mailto:vincent.neeb@mni.thm.de)>
- Andreas Kuczera — <[andreas.kuczera@mni.thm.de](mailto:andreas.kuczera@mni.thm.de)>


