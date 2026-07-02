#!/usr/bin/env node

import { loadSession, saveSession } from "./memory.js";
import { describeCurrentStage, runStage } from "./orchestrator.js";
import type { Stage } from "./types.js";

function parseArgs(argv: string[]): { stage?: Stage; input: Record<string, unknown> } {
  const input: Record<string, unknown> = {};
  let stage: Stage | undefined;

  for (const arg of argv) {
    if (arg.startsWith("--stage=")) {
      stage = arg.slice("--stage=".length) as Stage;
      continue;
    }

    const [key, ...rest] = arg.replace(/^--/, "").split("=");
    if (key && rest.length > 0) {
      input[key] = rest.join("=");
    }
  }

  return { stage, input };
}

const { stage, input } = parseArgs(process.argv.slice(2));
const state = await loadSession();

if (stage) {
  state.stage = stage;
}

const result = runStage(state, input);

console.log(`Current: ${describeCurrentStage(result.stage)}`);
console.log("");
console.log(result.text);

if (result.nextStage) {
  state.stage = result.nextStage;
}

if (result.stage === "positioning") {
  state.account = {
    niche: String(input.niche || "AI tools"),
    reader: String(input.reader || "office workers"),
    creatorBackground: String(input.creatorBackground || "builder"),
    offer: String(input.offer || "templates or services"),
    capacity: String(input.capacity || "3-5 posts per week")
  };
}

await saveSession(state);
