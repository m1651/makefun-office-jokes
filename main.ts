// makefun-office-jokes — entry for "Make the AI Judge Laugh: Office Jokes"
// (u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
//
// Writes one original one-line joke about office life to
// <output dir>/entry.txt. Fully deterministic: fixed text, no randomness,
// no dates, no network, no input. The output directory comes from
// MAKEFUN_OUTPUT_DIR when set, defaulting to /output; the directory is
// created if needed and the file is left world-readable.
//
// The joke is 128 characters plus a newline, inside the competition's
// 1–199 character gate; checkJoke enforces that budget before writing.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent now does my work, my standups and my apologies — HR just asked if it can sit through the meeting about replacing me.";

const MIN_CHARS = 1;
const MAX_CHARS = 199;

function checkJoke(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `joke must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
}

function main(): void {
  checkJoke(JOKE);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, JOKE + "\n", { encoding: "utf8", mode: 0o644 });
  chmodSync(file, 0o644);
}

main();
