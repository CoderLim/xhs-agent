import type { Stage } from "./types.js";

export interface SkillDefinition {
  stage: Stage;
  name: string;
  path: string;
  requiredInputs: string[];
  outputSummary: string[];
}

export const skills: SkillDefinition[] = [
  {
    stage: "positioning",
    name: "Positioning",
    path: "skills/positioning/SKILL.md",
    requiredInputs: ["niche", "reader"],
    outputSummary: ["reader", "scene", "problem", "pillars"]
  },
  {
    stage: "referenceReview",
    name: "Reference Review",
    path: "skills/reference-review/SKILL.md",
    requiredInputs: ["title", "body"],
    outputSummary: ["pattern", "demand", "adaptation"]
  },
  {
    stage: "topicPlan",
    name: "Topic Plan",
    path: "skills/topic-plan/SKILL.md",
    requiredInputs: ["account"],
    outputSummary: ["ideas", "priority"]
  },
  {
    stage: "noteDrafting",
    name: "Note Drafting",
    path: "skills/note-drafting/SKILL.md",
    requiredInputs: ["idea"],
    outputSummary: ["title", "cover", "draft"]
  },
  {
    stage: "riskReview",
    name: "Risk Review",
    path: "skills/risk-review/SKILL.md",
    requiredInputs: ["draft"],
    outputSummary: ["issues", "edits"]
  },
  {
    stage: "dataReview",
    name: "Data Review",
    path: "skills/data-review/SKILL.md",
    requiredInputs: ["metrics"],
    outputSummary: ["signals", "nextTest"]
  }
];

export function getSkill(stage: Stage): SkillDefinition {
  const skill = skills.find((item) => item.stage === stage);
  if (!skill) throw new Error(`Unknown stage: ${stage}`);
  return skill;
}
