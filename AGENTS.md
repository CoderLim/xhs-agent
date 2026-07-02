# Repository Instructions

This repository defines a content planning workflow.

## Main Workflow

Run one stage at a time:

1. positioning
2. referenceReview
3. topicPlan
4. noteDrafting
5. riskReview
6. dataReview

## Commands

```bash
pnpm install
pnpm dev -- --stage=positioning --niche="AI tools" --reader="office workers"
pnpm dev -- --stage=topicPlan
pnpm dev -- --stage=noteDrafting --idea="Use AI to finish a weekly report"
pnpm dev -- --stage=dataReview --views=1000 --saves=80 --comments=10
```

## Files to Read First

- README.md
- agent/SYSTEM.md
- flows/growth-flow.md
- skills/*/SKILL.md
- src/orchestrator.ts

## Development Rules

- Keep the workflow explicit.
- Do not merge stages without user confirmation.
- Keep CLI output readable.
- Keep metric interpretation cautious.
- Prefer simple local data files before adding external services.
