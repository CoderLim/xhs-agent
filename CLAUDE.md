@AGENTS.md

## Claude Code Notes

Use the repository workflow as the source of truth.

When asked to improve the project:

1. Inspect README.md and agent/SYSTEM.md first.
2. Inspect src/orchestrator.ts before changing any stage order.
3. Keep skills as small markdown modules.
4. Keep the CLI runnable with pnpm dev.
5. Do not add platform automation unless the user explicitly asks for it.

If a task is about content planning, use the matching skill file before editing code.
