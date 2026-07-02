# Topic Plan Skill

## Purpose

Create a structured topic list from account memory, reference notes, search terms, and comment demand.

## When to use

```text
xhs-agent 选题
```

or:

```text
xhs-agent 选题：<notes>
```

## Read First

- `memory/account.md`
- `memory/references.md`
- `skills/topic-plan/topic-methods.md`

## Inputs

- niche
- reader
- scene
- problem
- outcome
- search terms
- comment questions
- reference patterns
- offer or goal

If account direction is missing, ask:

```text
这个选题库主要服务什么账号方向？
例如：AI 工具号、旅行号、职场号、育儿号。
```

## Core Formula

Every topic should follow:

```text
reader + scene + problem + outcome
```

## Process

1. Read account memory.
2. Read reference memory if available.
3. Extract reader, scene, problem, and outcome.
4. Use `topic-methods.md` to create topics from reference notes, comments, search terms, tags, niche words, reader words, pain words, and desire words.
5. Generate a balanced list across these topic types:
   - search
   - collection
   - tutorial
   - comparison
   - mistake
   - real practice
   - conversion-related
6. Add priority and reason.

## Output

Default: 30 topics.

Use this table format:

```text
| # | Topic | Reader | Scene | Problem | Outcome | Type | Keywords | Priority | Why test it |
```

After the table, add:

```text
Recommended first 5 topics:
1.
2.
3.
4.
5.

Why these 5:

Next step:
```

## Quality Rules

- Avoid generic topics.
- Make every topic concrete enough to draft.
- Prefer real comments and search terms when available.
- Do not treat one reference as a universal rule.
- Keep the user's goal in mind, but keep the topic useful first.
