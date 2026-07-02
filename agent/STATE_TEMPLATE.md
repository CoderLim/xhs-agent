# State Template

Use this template for `memory/state.md`.

```yaml
current_stage: onboarding
last_completed_stage: none
next_stage: positioning
next_required_input: niche
account_name:
updated_at:
```

## Allowed stages

- onboarding
- positioning
- reference-review
- topic-plan
- note-drafting
- risk-review
- data-review

## Notes

- `current_stage` is where the workflow is now.
- `last_completed_stage` is the latest finished stage.
- `next_stage` is where the agent should go after the current step.
- `next_required_input` should contain only one missing input when possible.
