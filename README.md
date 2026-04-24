# Portfolio Jan Muljowin

[![Live Site](https://img.shields.io/badge/status-online-green.svg?style=for-the-badge)](https://janmuljowin.de)
[![Build and Publish](https://github.com/forule/portfolio/actions/workflows/build-and-publish.yml/badge.svg)](https://github.com/forule/portfolio/actions/workflows/build-and-publish.yml)

Dieses Repository enthält den Quellcode und die Infrastruktur-Konfiguration meiner persönlichen Portfolio-Website. Das Projekt dient der Demonstration technischer Kompetenzen in der Web-Entwicklung sowie im Bereich CI/CD und Containerisierung.

## 1. Übersicht

Die Webpräsenz ist als performante Single-Page-Application (SPA) konzipiert. Sie präsentiert ausgewählte Projekte aus den Bereichen Software Engineering, User Experience Research und technisches Design.

- **URL:** [janmuljowin.de](https://janmuljowin.de)
- **Status:** Produktion / Aktiv

## 2. Technischer Stack

### Frontend
- **Framework:** Vite mit TypeScript
- **Styling:** Tailwind CSS (Utility-First-Ansatz)
- **Typografie:** Fokus auf hoher Lesbarkeit und systemnahem Design

### Infrastruktur und Deployment
- **Containerisierung:** Docker (Multi-stage Builds zur Minimierung der Image-Größe)
- **Webserver:** Nginx (Alpine-basiert, optimiert für statische Assets)
- **Orchestrierung:** Coolify (Self-hosted auf Hetzner Cloud VPS)
- **CI/CD:** GitHub Actions für Build-Automatisierung und GHCR (GitHub Container Registry)

## 3. Architektur und Deployment-Prozess

Das Deployment folgt einem automatisierten Workflow, um Konsistenz zwischen Entwicklung und Produktion zu gewährleisten:

1. **Build-Phase:** Bei Veröffentlichung eines Git-Tags (Schema `v*`) initiiert GitHub Actions einen Build-Lauf.
2. **Containerisierung:** Das Projekt wird in einer Node.js-Umgebung gebaut.
3. **Registry:** Das fertige Docker-Image wird in die GitHub Container Registry (GHCR) hochgeladen.
4. **Automatisches Update:** Die Coolify-Instanz auf dem Server erkennt das neue Image in der Registry und führt einen unterbrechungsfreien Neustart des Containers durch (Pull-Prinzip).
