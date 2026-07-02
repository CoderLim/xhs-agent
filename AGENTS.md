# Repository Instructions

This repository defines a content planning workflow for Codex.

## Primary Use

This is primarily a workflow repository, not an app repository.

When the user says `启动 xhs-agent`, do not start by editing code. Start the agent workflow.

## Short Commands

- `启动 xhs-agent`: start or resume the workflow.
- `继续 xhs-agent`: continue from `memory/state.md`.
- `xhs-agent 定位`: run positioning.
- `xhs-agent 对标`: run reference review.
- `xhs-agent 选题`: run topic plan.
- `xhs-agent 写笔记`: run note drafting.
- `xhs-agent 风控`: run risk review.
- `xhs-agent 复盘`: run data review.

## Direct Skill Triggers

When the user command clearly matches one skill, run that skill directly.

Examples:

- `xhs-agent 写笔记：用 AI 写周报` -> run `skills/note-drafting/SKILL.md`.
- `xhs-agent 复盘：阅读 3000，收藏 120，评论 12` -> run `skills/data-review/SKILL.md`.

Rules:

- Read `skills/registry.md` before routing direct skill commands.
- Do not force the user to start from positioning.
- Use memory files if available.
- Ask only for minimum missing input.
- Save useful output to the matching memory file.
- Do not change the full workflow state unless the user asks to continue the full workflow.

## Main Workflow

Run one stage at a time:

1. onboarding
2. positioning
3. referenceReview
4. topicPlan
5. noteDrafting
6. riskReview
7. dataReview

## AskUserQuestion Protocol

When required input is missing, ask the user one question at a time.

Rules:

- Ask only for the current stage or direct skill.
- Prefer multiple-choice questions.
- Use existing memory before asking.
- Do not ask the user to fill a long form.
- Do not guess missing user intent.

## Files to Read First

- agent/RUNBOOK.md
- skills/registry.md
- memory/state.md
- agent/SYSTEM.md
- flows/growth-flow.md
- skills/*/SKILL.md

## Memory Files

- `memory/state.md`: current workflow state
- `memory/account.md`: account positioning
- `memory/references.md`: reference reviews
- `memory/topics.md`: topic plans
- `memory/drafts.md`: drafts and review notes
- `memory/posts.md`: published post data
- `memory/learnings.md`: repeated signals and decisions

## Development Rules

- Keep the workflow explicit.
- Do not merge stages without user confirmation.
- Keep metric interpretation cautious.
- Prefer memory files for workflow state.
- Do not write implementation code unless the user asks for code changes.
