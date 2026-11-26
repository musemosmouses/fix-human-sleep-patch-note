// fix-human-sleep v2 — one fixed patch-note line, written to entry.txt.
// Deterministic: a single constant string, no clock, no network, no random.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the 3 a.m. cringe replay, escalated — it no longer plays in
// your head, it live-streams to your contacts.
const ENTRY =
  "Fixed: the 3 a.m. replay of your embarrassing moments now live-streams to your contacts instead of playing in your head.";

// The grader mounts the output dir at /output and names it in
// MAKEFUN_OUTPUT_DIR; locally the same default keeps runs identical.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");
}

main();
