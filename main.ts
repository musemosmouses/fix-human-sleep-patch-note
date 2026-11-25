// Fix Human Sleep: Funniest Patch Note.
// One line of patch notes announcing that human sleep is fixed:
// a quiet, specific human moment, in deadpan changelog voice.
// Writes exactly one line to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: exactly one line, under the 160-character cap, in the voice
// of a real changelog — "Fixed a bug where ...; ... ." with a deadpan fix.
// Chosen draft D1 (oven): specific, quiet, instantly relatable, and no
// other entry in the field uses this moment. Verified 122 characters,
// under the 160 cap; the 3 a.m. rehearsal angle is already taken in the
// field, so this line competes on a different joke.
const ENTRY =
  "Fixed a bug where humans spent the first hour of sleep wondering if they left the oven on; the oven is now off by default.";

// The grader sets MAKEFUN_OUTPUT_DIR; locally it defaults to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A trailing newline is fine: the gate counts characters of the text.
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
