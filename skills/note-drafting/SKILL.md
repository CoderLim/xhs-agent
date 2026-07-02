# Note Drafting Skill

## Purpose

Turn one selected topic into a complete note draft.

This skill can be used directly with:

```text
xhs-agent 写笔记：<topic>
```

Do not force the full workflow when the user only wants to draft one note.

## Read First

- `memory/account.md`
- `memory/topics.md`
- `memory/references.md`
- `skills/note-drafting/title-formulas.md`
- `skills/note-drafting/cover-patterns.md`
- `skills/note-drafting/body-templates.md`
- `skills/note-drafting/output-checklist.md`
- `rules/risk-control.md`

## Minimum Input

- topic or idea

If only a topic is provided, check memory first. If the target reader is still unclear, ask:

```text
这篇笔记主要写给谁？

A. 普通职场人
B. 内容创作者
C. 程序员 / 独立开发者
D. 学生 / 求职者
E. 不确定，先按大众用户写
```

## Basic Unit

Before writing, fill this unit:

```text
Reader:
Scene:
Problem:
Outcome:
```

## Process

1. Choose the content type: pain-solution, tutorial, review, comparison, collection, checklist, or real practice note.
2. Generate 10 title options using `title-formulas.md`.
3. Recommend one title and explain why.
4. Generate 3 cover text options using `cover-patterns.md`.
5. Recommend one cover and explain why.
6. Build the body with this structure:

```text
痛点共情 -> 原因点破 -> 给出方案 -> 行动引导
```

For detailed notes, use:

```text
痛点共情 -> 原因点破 -> 给出方案 -> 示例演示 -> 行动引导
```

7. Write the full draft using short paragraphs and concrete scenes.
8. Add tags, keywords, and a comment question.
9. Add light risk notes.

## Writing Rules

- Use `你` when speaking to the reader.
- Start with a concrete scene.
- Keep paragraphs short.
- Give a practical method, example, template, or checklist.
- Do not invent personal experience.
- If an example is hypothetical, say it is an example.
- The title, cover, and body must promise the same thing.
- Do not use unsupported numbers or fixed-result promises.

## Output Format

```text
## 1. Basic Unit
Reader:
Scene:
Problem:
Outcome:

## 2. Title Options
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.

Recommended title:
Reason:

## 3. Cover Options
Option A:
Main text:
Supporting text:
Visual idea:
Why it fits:

Option B:
Main text:
Supporting text:
Visual idea:
Why it fits:

Option C:
Main text:
Supporting text:
Visual idea:
Why it fits:

Recommended cover:
Reason:

## 4. Body Structure

## 5. Full Draft

## 6. Tags / Keywords

## 7. Comment Question

## 8. Risk Notes
```
