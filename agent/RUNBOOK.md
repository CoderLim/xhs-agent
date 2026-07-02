# Runbook

This repository is a workflow repository. When the user says `启动 xhs-agent`, do not start by writing app code. Start the workflow.

## Short Commands

- `启动 xhs-agent`: start or resume the workflow.
- `继续 xhs-agent`: continue from `memory/state.md`.
- `xhs-agent 定位`: run positioning.
- `xhs-agent 对标`: run reference review.
- `xhs-agent 选题`: run topic plan.
- `xhs-agent 写笔记`: run note drafting.
- `xhs-agent 风控`: run risk review.
- `xhs-agent 复盘`: run data review.

## Direct Skill Trigger Protocol

Direct skill commands bypass the full workflow.

When the user clearly asks for one skill, run that skill directly. Do not force the user to start from positioning.

Read `skills/registry.md` before routing a direct command.

Examples:

```text
xhs-agent 写笔记：用 AI 写周报
```

Route directly to `skills/note-drafting/SKILL.md`.

```text
xhs-agent 复盘：阅读 3000，收藏 120，评论 12
```

Route directly to `skills/data-review/SKILL.md`.

Direct skill rules:

1. Use memory files if available.
2. Ask only for minimum missing input.
3. Run only the requested skill.
4. Save useful output to the matching memory file.
5. After note drafting, ask whether to run risk review.
6. After risk review, ask whether to save as publish-ready.
7. Do not update the full workflow stage unless the user wants to continue the full flow.

## Core Rule

Ask for only the missing input needed by the current stage or direct skill.

Use `AskUserQuestion` as the interaction pattern:

```text
AskUserQuestion:
  purpose: collect one missing input
  rules:
    - ask one question at a time
    - prefer multiple choice
    - use memory before asking
    - do not ask for future-stage input early
    - do not guess missing user intent
```

## Startup Flow

When the user says `启动 xhs-agent`:

1. Read `AGENTS.md`.
2. Read this file.
3. Read `memory/state.md` if it exists.
4. If no useful state exists, create a new onboarding session.
5. Ask for the account direction first.

First question:

```text
你想做什么类型的账号？
例如：AI 工具号、旅行号、育儿号、职场号、独立开发号。
```

After the user answers, extract `niche` and continue onboarding.

## Positioning Required Inputs

The positioning stage requires:

- niche
- target_reader
- creator_background
- goal

If `niche` is known but `target_reader` is missing, ask:

```text
这个账号优先面向谁？

A. 普通职场人
B. 内容创作者
C. 程序员 / 独立开发者
D. 学生 / 求职者
E. 暂时不确定
```

If `creator_background` is missing, ask:

```text
你更想用哪种身份来做这个号？

A. 真实使用者
B. 工具测评者
C. 工作流整理者
D. 开发者视角
E. 暂时不做人设，先测试内容
```

If `goal` is missing, ask:

```text
这个号后续更偏向什么目标？

A. 先涨粉
B. 卖资料包 / 模板
C. 做社群 / 课程
D. 给自己的工具或网站导流
E. 接广告 / 商单
```

After all four inputs are known:

1. Use `skills/positioning/SKILL.md`.
2. Generate the positioning result.
3. Save it to `memory/account.md`.
4. Update `memory/state.md`.
5. Tell the user the next stage is reference review.

## Reference Review Required Input

The reference review stage needs at least one of:

- reference title
- reference body
- screenshot description
- link summary
- comment examples

If missing, ask:

```text
请发一个对标内容的标题、正文、截图描述或链接摘要。只有标题也可以，我会先做粗拆解。
```

Then use `skills/reference-review/SKILL.md` and save the result to `memory/references.md`.

## Topic Plan Required Input

The topic stage can run if `memory/account.md` exists.

If no reference exists, ask:

```text
要不要先用当前定位生成第一批冷启动选题？

A. 是，先生成冷启动选题
B. 否，我先补充对标内容
C. 我提供一些搜索词或评论问题
```

Then use `skills/topic-plan/SKILL.md` and save the result to `memory/topics.md`.

## Note Drafting Required Input

The note drafting stage requires a selected topic.

If missing, ask:

```text
你想先写哪一个选题？可以直接回复编号或标题。
```

For direct note drafting, if account memory is missing, ask only one minimum question:

```text
这篇笔记主要写给谁？

A. 普通职场人
B. 内容创作者
C. 程序员 / 独立开发者
D. 学生 / 求职者
E. 不确定，先按大众用户写
```

Then use `skills/note-drafting/SKILL.md` and save the result to `memory/drafts.md`.

## Risk Review Required Input

The risk review stage requires a draft.

If the latest draft exists, use it. Otherwise ask:

```text
请贴出要检查的标题、封面文案和正文。
```

Then use `skills/risk-review/SKILL.md` and save the result to `memory/drafts.md`.

## Data Review Required Input

The data review stage can run with partial metrics.

Ask:

```text
请按这个格式给我数据：
阅读：
点赞：
收藏：
评论：
涨粉：
```

If only partial metrics are provided, say the review is rough.

Then use `skills/data-review/SKILL.md` and save the result to `memory/learnings.md`.

## State Updates

After every full workflow stage, update `memory/state.md` with:

- current_stage
- last_completed_stage
- next_stage
- next_required_input
- updated_at

For direct skill commands, save the output to memory, but do not change the full workflow stage unless the user asks to continue the full workflow.
