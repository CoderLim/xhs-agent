import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { SessionState } from "./types.js";

export async function loadJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(path, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function saveJson<T>(path: string, data: T): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export async function loadSession(path = "data/session.json"): Promise<SessionState> {
  return loadJson<SessionState>(path, { stage: "positioning" });
}

export async function saveSession(state: SessionState, path = "data/session.json"): Promise<void> {
  await saveJson(path, state);
}
