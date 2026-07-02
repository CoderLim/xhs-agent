# xhs-agent

A methodology, skill, and runnable CLI scaffold for a content planning agent.

The goal is to turn account building into a repeatable experiment loop:

```text
positioning -> reference review -> topic plan -> draft -> review -> data review -> next plan
```

## Quick Start

```bash
pnpm install
pnpm dev -- --stage=positioning --niche="AI tools" --reader="office workers" --creatorBackground="frontend developer" --offer="templates and services"
```

Then run the next stages:

```bash
pnpm dev -- --stage=referenceReview --title="reference title"
pnpm dev -- --stage=topicPlan
pnpm dev -- --stage=noteDrafting --idea="Use AI to finish a weekly report"
pnpm dev -- --stage=riskReview --title="Use AI to finish a weekly report"
pnpm dev -- --stage=dataReview --views=1000 --saves=80 --comments=10
```

The CLI stores local state in `data/session.json`.

## MVP Modules

1. Positioning
2. Reference review
3. Topic planning
4. Drafting
5. Risk review
6. Data review

## Repo Structure

```text
.
├── README.md
├── agent/
│   └── SYSTEM.md
├── data/
│   ├── account.example.json
│   ├── topics.example.json
│   └── posts.example.json
├── docs/
│   ├── prd.md
│   ├── methodology.md
│   └── evidence-map.md
├── flows/
│   ├── growth-flow.md
│   └── growth-flow.json
├── prompts/
│   ├── system.md
│   └── modules.md
├── skills/
│   ├── positioning/
│   ├── reference-review/
│   ├── topic-plan/
│   ├── note-drafting/
│   ├── risk-review/
│   └── data-review/
├── src/
│   ├── cli.ts
│   ├── memory.ts
│   ├── orchestrator.ts
│   ├── skills.ts
│   └── types.ts
├── rules/
│   └── risk-control.md
├── package.json
└── tsconfig.json
```

## Core Principles

- Start from reader, scene, problem, and outcome.
- Learn from reference examples, but do not copy personal stories or images.
- Treat metric thresholds as reference points, not laws.
- Separate method, judgment, and hypothesis.
- Optimize for trust and repeatability.

## Current Status

V0.2 runnable CLI scaffold is created. It does not call any LLM API yet; the next step is to connect the orchestrator to a model provider.
