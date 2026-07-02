export type Stage =
  | "positioning"
  | "referenceReview"
  | "topicPlan"
  | "noteDrafting"
  | "riskReview"
  | "dataReview";

export interface SessionState {
  stage: Stage;
  account?: AccountProfile;
  topics?: TopicIdea[];
  posts?: PostRecord[];
}

export interface AccountProfile {
  niche: string;
  reader: string;
  creatorBackground?: string;
  offer?: string;
  capacity?: string;
}

export interface TopicIdea {
  idea: string;
  reader: string;
  scene: string;
  problem: string;
  result: string;
  format: string;
  priority: "low" | "medium" | "high";
}

export interface PostRecord {
  title: string;
  publishedAt?: string;
  views?: number;
  reads?: number;
  likes?: number;
  saves?: number;
  comments?: number;
  follows?: number;
  notes?: string[];
}

export interface StepResult {
  stage: Stage;
  text: string;
  nextStage?: Stage;
}
