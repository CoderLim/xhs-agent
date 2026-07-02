# Reference Review Skill

## Purpose

Break down a reference note into reusable demand and structure.

This skill should help the user learn what works without reusing another person's story, image, or unsupported claim.

## When to use

Use this skill when the user provides one or more of:

- title
- cover text or cover description
- body text
- visible metrics
- comments
- account context
- screenshot description
- link summary

Direct command:

```text
xhs-agent 对标：<reference>
```

## Read First

- `skills/reference-review/breakdown-checklist.md`
- `skills/note-drafting/title-formulas.md`
- `skills/note-drafting/cover-patterns.md`
- `skills/note-drafting/body-templates.md`
- `rules/risk-control.md`

## Minimum Input

At least one of:

- reference title
- body text
- screenshot description
- link summary
- comment examples

If no usable reference content is provided, ask:

```text
请发一个对标内容的标题、正文、截图描述或链接摘要。只有标题也可以，我会先做粗拆解。
```

## Process

1. Decide whether the reference is worth reviewing.
2. Extract reader, scene, problem, and outcome.
3. Break down the title pattern.
4. Break down the cover pattern.
5. Break down the body structure.
6. Extract comment demand.
7. Extract keyword layout.
8. Separate reusable parts from non-reusable parts.
9. Convert the reference into adaptation ideas for the user's account.

## Output

```text
## 1. Worth Reviewing
Yes/No:
Reason:

## 2. Basic Unit
Reader:
Scene:
Problem:
Outcome:

## 3. Title Breakdown
Title pattern:
Core word in front:
Pain point:
Result promise:
Suspense or contrast:
Risk level:

## 4. Cover Breakdown
Main text:
Supporting text:
Visual type:
Information hierarchy:
Scene or contrast:

## 5. Body Breakdown
Opening hook:
Reason explained:
Steps or solution:
Example:
Ending action:

## 6. Comment Demand
User questions:
Requests:
Objections:
Next-topic ideas:

## 7. Keyword Layout
Title keywords:
Body long-tail keywords:
Tag keywords:

## 8. Reusable Pattern

## 9. Do Not Reuse

## 10. Adaptation Ideas
```

## Quality Rules

- Learn demand and structure, not the original wording.
- Treat visible metrics as signals, not proof.
- Prefer recent and niche-relevant references.
- Do not turn one reference into a universal rule.
