# Skill Registry

This file defines direct skill triggers for Codex.

## Trigger Rule

When the user command clearly matches one skill, run that skill directly. Do not force the full workflow.

Use memory files when available. If required input is missing, ask one short question.

## Skills

| Trigger | Skill | Path | Main Input |
|---|---|---|---|
| xhs-agent 定位 | positioning | skills/positioning/SKILL.md | account idea |
| xhs-agent 对标 | reference-review | skills/reference-review/SKILL.md | reference content |
| xhs-agent 选题 | topic-plan | skills/topic-plan/SKILL.md | account or search notes |
| xhs-agent 写笔记 | note-drafting | skills/note-drafting/SKILL.md | topic |
| xhs-agent 风控 | risk-review | skills/risk-review/SKILL.md | draft |
| xhs-agent 复盘 | data-review | skills/data-review/SKILL.md | metrics |

## Direct Skill Examples

```text
xhs-agent 写笔记：用 AI 写周报
```

Run `skills/note-drafting/SKILL.md` directly.

```text
xhs-agent 复盘：阅读 3000，收藏 120，评论 12
```

Run `skills/data-review/SKILL.md` directly.

## Missing Input Policy

If direct skill input is incomplete:

1. Read memory first.
2. Ask only the minimum missing question.
3. Continue the skill after the user answers.
4. Save useful output to memory.

