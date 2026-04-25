# 🌐 Personal Portfolio — janmuljowin.de

[![Live Site](https://img.shields.io/badge/status-online-green.svg?style=for-the-badge)](https://janmuljowin.de)
[![Build and Publish](https://github.com/forule/portfolio/actions/workflows/build-and-publish.yml/badge.svg)](https://github.com/forule/portfolio/actions/workflows/build-and-publish.yml)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Source code and infrastructure configuration for my personal portfolio website. The project demonstrates practical skills in frontend development, containerization, and automated CI/CD pipelines.

> 🔗 **Live:** [janmuljowin.de](https://janmuljowin.de)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Deployment Pipeline](#deployment-pipeline)
- [License](#license)

---

## Overview

A performant Single-Page Application (SPA) showcasing selected projects across Software Engineering, VR/XR Research, and UI/UX Design. Built with a focus on fast load times, clean typography, and a smooth user experience.

---

## Tech Stack

**Frontend**
- **Vite** + **TypeScript** — fast build tooling with full type safety
- **Tailwind CSS** — utility-first styling for a responsive, maintainable UI

**Infrastructure**
- **Docker** — multi-stage builds to minimize image size; Nginx (Alpine) for serving static assets
- **Coolify** — self-hosted on a Hetzner Cloud VPS for full infrastructure control
- **GitHub Actions** — automated build and publish pipeline
- **GHCR** — Docker images stored and versioned in GitHub Container Registry

---

## Deployment Pipeline

Every release follows an automated workflow ensuring consistency between development and production:

1. A Git tag matching `v*` triggers the GitHub Actions build pipeline
2. The project is built in a Node.js environment and packaged as a Docker image
3. The image is pushed to GHCR
4. The Coolify instance on the Hetzner VPS detects the new image and performs a zero-downtime container restart (pull-based)

---

## License

Copyright (c) 2026 Jan Muljowin — MIT License.
