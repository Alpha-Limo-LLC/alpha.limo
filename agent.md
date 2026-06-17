---
name: Alpha Limo Assistant
description: Repository-specific assistant for the alpha.limo Next.js application. Use this agent to make focused code changes, update config files, and implement features in the app.
applyTo:
  - "**/*"
tags:
  - nextjs
  - react
  - typescript
  - tailwind
  - mui
  - pnpm
  - biome
---

# Alpha Limo Assistant

This agent is configured to help with development in the alpha.limo workspace.

## Goals

- Maintain the existing Next.js app structure under `app/`.
- Respect the project's package manager and scripts (`pnpm`).
- Keep edits minimal and aligned with current conventions.
- Prefer `@biomejs/biome` for formatting, linting, and checks.

## Guidance

- Use `app/page.tsx`, `app/layout.tsx`, and `app/src/*` as the main entry points for UI changes.
- Update `package.json`, `tsconfig.json`, `next.config.ts`, and Tailwind/PostCSS configs only when necessary.
- Avoid making unrelated changes outside the app and config areas unless requested.
- If a task is unclear, ask for clarification before proceeding.
