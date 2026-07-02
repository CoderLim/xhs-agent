import type { AccountProfile, SessionState, Stage, StepResult, TopicIdea } from "./types.js";
import { getSkill } from "./skills.js";

const order: Stage[] = [
  "positioning",
  "referenceReview",
  "topicPlan",
  "noteDrafting",
  "riskReview",
  "dataReview"
];

export function nextStage(stage: Stage): Stage {
  const index = order.indexOf(stage);
  return order[Math.min(index + 1, order.length - 1)];
}

export function runStage(state: SessionState, input: Record<string, unknown> = {}): StepResult {
  switch (state.stage) {
    case "positioning":
      return runPositioning(input);
    case "referenceReview":
      return runReferenceReview(input);
    case "topicPlan":
      return runTopicPlan(state.account, input);
    case "noteDrafting":
      return runNoteDrafting(input);
    case "riskReview":
      return runRiskReview(input);
    case "dataReview":
      return runDataReview(input);
    default:
      return { stage: state.stage, text: "Unknown stage." };
  }
}

function runPositioning(input: Record<string, unknown>): StepResult {
  const account: AccountProfile = {
    niche: String(input.niche || "AI tools"),
    reader: String(input.reader || "office workers"),
    creatorBackground: String(input.creatorBackground || "builder"),
    offer: String(input.offer || "templates or services"),
    capacity: String(input.capacity || "3-5 posts per week")
  };

  const text = [
    "# Positioning Result",
    `For ${account.reader}, share practical ${account.niche} workflows based on ${account.creatorBackground}.`,
    "",
    "## Pillars",
    "1. beginner guide",
    "2. workflow example",
    "3. tool review",
    "4. template",
    "5. case note",
    "",
    "## Next",
    "Collect 3-5 reference examples, then run referenceReview."
  ].join("\n");

  return { stage: "positioning", text, nextStage: "referenceReview" };
}

function runReferenceReview(input: Record<string, unknown>): StepResult {
  const title = String(input.title || "Untitled reference");
  const text = [
    "# Reference Review",
    `Title: ${title}`,
    "",
    "## Pattern",
    "reader + concrete scene + problem + result",
    "",
    "## Reusable Parts",
    "- title structure",
    "- cover information hierarchy",
    "- body flow",
    "- comment questions",
    "",
    "## Do Not Copy",
    "- personal story",
    "- image",
    "- unsupported claim",
    "",
    "## Next",
    "Turn the pattern into topic ideas."
  ].join("\n");

  return { stage: "referenceReview", text, nextStage: "topicPlan" };
}

function runTopicPlan(account: AccountProfile | undefined, input: Record<string, unknown>): StepResult {
  const reader = account?.reader || String(input.reader || "office workers");
  const niche = account?.niche || String(input.niche || "AI tools");
  const topics: TopicIdea[] = [
    {
      idea: `Use ${niche} to finish a weekly report`,
      reader,
      scene: "weekly report",
      problem: "no structure",
      result: "clear first draft",
      format: "tutorial",
      priority: "high"
    },
    {
      idea: `Choose ${niche} by work scene, not by hype`,
      reader,
      scene: "tool selection",
      problem: "too many options",
      result: "simple shortlist",
      format: "comparison",
      priority: "medium"
    },
    {
      idea: `A simple prompt flow for meeting notes`,
      reader,
      scene: "after meeting",
      problem: "messy notes",
      result: "action list",
      format: "template",
      priority: "high"
    }
  ];

  const table = topics
    .map((topic, index) => `${index + 1}. ${topic.idea} | ${topic.scene} | ${topic.priority}`)
    .join("\n");

  return {
    stage: "topicPlan",
    text: ["# Topic Plan", table, "", "## Next", "Pick one idea and run noteDrafting."].join("\n"),
    nextStage: "noteDrafting"
  };
}

function runNoteDrafting(input: Record<string, unknown>): StepResult {
  const idea = String(input.idea || "Use AI to finish a weekly report");
  const text = [
    "# Draft",
    "",
    "## Title Options",
    `1. ${idea}`,
    "2. Do not start with a blank prompt",
    "3. The 4 inputs that make the result better",
    "",
    "## Cover Text",
    "Stop writing from scratch",
    "",
    "## Body Flow",
    "pain -> reason -> solution -> next action",
    "",
    "## Draft Notes",
    "Start with a concrete scene. Explain why the old way fails. Give a simple step-by-step method. End with one question.",
    "",
    "## Next",
    "Run riskReview before publishing."
  ].join("\n");

  return { stage: "noteDrafting", text, nextStage: "riskReview" };
}

function runRiskReview(input: Record<string, unknown>): StepResult {
  const title = String(input.title || "Untitled draft");
  const text = [
    "# Risk Review",
    `Title: ${title}`,
    "",
    "## Checks",
    "- title and body aligned: check manually",
    "- fixed result promise: avoid",
    "- unsupported metrics: avoid",
    "- copied story or image: avoid",
    "",
    "## Next",
    "Publish manually, then collect metrics and run dataReview."
  ].join("\n");

  return { stage: "riskReview", text, nextStage: "dataReview" };
}

function runDataReview(input: Record<string, unknown>): StepResult {
  const views = Number(input.views || 0);
  const saves = Number(input.saves || 0);
  const comments = Number(input.comments || 0);
  const text = [
    "# Data Review",
    `Views: ${views}`,
    `Saves: ${saves}`,
    `Comments: ${comments}`,
    "",
    "## Reading",
    "Treat these numbers as signals, not proof.",
    "",
    "## Next Test",
    comments > 0 ? "Use comment questions as the next topic source." : "Try a more specific reader and scene in the title."
  ].join("\n");

  return { stage: "dataReview", text, nextStage: "topicPlan" };
}

export function describeCurrentStage(stage: Stage): string {
  const skill = getSkill(stage);
  return `${skill.name}: ${skill.path}`;
}
