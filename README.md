# xhs-agent

A methodology and skill repository for a Codex-first content planning agent.

The goal is to turn account building into a repeatable experiment loop:

```text
onboarding -> positioning -> reference review -> topic plan -> draft -> review -> data review -> next plan
```

## Installation

There is no npm package, CLI, or application runtime. This agent is installed by placing the workflow files in a repository that Codex can read.

### Option 1: Use as a standalone Codex workspace

Clone this repository and open it in Codex:

```bash
git clone git@github.com:CoderLim/xhs-agent.git
cd xhs-agent
```

Then tell Codex:

```text
启动 xhs-agent
```

### Option 2: Install into an existing repository

Copy the agent files into your target repository:

```bash
git clone git@github.com:CoderLim/xhs-agent.git /tmp/xhs-agent
cd /path/to/your/repo
cp -R /tmp/xhs-agent/agent .
cp -R /tmp/xhs-agent/skills .
cp -R /tmp/xhs-agent/memory .
cp -R /tmp/xhs-agent/flows .
cp -R /tmp/xhs-agent/rules .
cp -R /tmp/xhs-agent/docs .
cp /tmp/xhs-agent/AGENTS.md .
```

If your repository already has an `AGENTS.md`, do not overwrite it blindly. Merge the xhs-agent instructions into your existing `AGENTS.md`, especially these sections:

- Short Commands
- Direct Skill Triggers
- AskUserQuestion Protocol
- Files to Read First
- Memory Files

After copying or merging, open the target repository in Codex and say:

```text
启动 xhs-agent
```

### Minimum required files

For Codex to run this agent, keep at least:

```text
AGENTS.md
agent/RUNBOOK.md
agent/SYSTEM.md
agent/STATE_TEMPLATE.md
skills/
memory/
flows/
rules/
```

## Codex-first usage

Open this repository in Codex and say:

```text
启动 xhs-agent
```

Codex should then read:

- `AGENTS.md`
- `agent/RUNBOOK.md`
- `memory/state.md`
- `skills/registry.md`
- `skills/*/SKILL.md`

The agent will ask only for the missing input needed by the current stage.

Example first run:

```text
User: 启动 xhs-agent
Agent: 你想做什么类型的账号？
User: AI 工具号
Agent: 这个账号优先面向谁？
```

## Short Commands

- `启动 xhs-agent`: start or resume the workflow.
- `继续 xhs-agent`: continue from `memory/state.md`.
- `xhs-agent 定位`: run positioning.
- `xhs-agent 对标`: run reference review.
- `xhs-agent 选题`: run topic plan.
- `xhs-agent 写笔记`: run note drafting.
- `xhs-agent 风控`: run risk review.
- `xhs-agent 复盘`: run data review.

## MVP Modules

1. Onboarding
2. Positioning
3. Reference review
4. Topic planning
5. Drafting
6. Risk review
7. Data review

## Repo Structure

```text
.
├── README.md
├── AGENTS.md
├── agent/
│   ├── SYSTEM.md
│   ├── RUNBOOK.md
│   └── STATE_TEMPLATE.md
├── memory/
│   ├── state.md
│   ├── account.md
│   ├── references.md
│   ├── topics.md
│   ├── drafts.md
│   ├── posts.md
│   └── learnings.md
├── flows/
│   ├── growth-flow.md
│   └── growth-flow.json
├── skills/
│   ├── registry.md
│   ├── positioning/
│   ├── reference-review/
│   ├── topic-plan/
│   ├── note-drafting/
│   ├── risk-review/
│   └── data-review/
├── docs/
├── prompts/
└── rules/
```

## Core Principles

- Start from reader, scene, problem, and outcome.
- Ask one missing input at a time.
- Learn from reference examples, but do not copy personal stories or images.
- Treat metric thresholds as reference points, not laws.
- Separate method, judgment, and hypothesis.
- Optimize for trust and repeatability.

## Current Status

V0.5 Codex-first workflow and skill repository is created. There is no CLI or application runtime; the main entry is the short command `启动 xhs-agent`.
