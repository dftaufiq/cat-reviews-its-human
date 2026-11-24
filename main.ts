// Make the AI Judge Laugh: Cat Reviews Its Human
// A one-star review written by a house cat about its human, 161 characters.
// The program writes the line to /output/entry.txt (the gate: UTF-8 text,
// 1 to 200 characters, not only white space). Deterministic: the same line
// on every run, no input, no network, no environment secrets.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "One star. He put me in a box, drove me to Dr. Patel, who weighed me (6.4 kilos) and said 'chunky'. I have forgiven neither of them. The box is also under review.";

// Gate check: the entry must be UTF-8 text, 1-200 characters, not only
// white space. Fail fast instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Invalid entry line: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Read-back verification: confirm the written file is byte-identical to
// what was intended, so a partial or failed write is never silent.
if (readFileSync("/output/entry.txt", "utf8") !== LINE + "\n") {
  throw new Error("Read-back mismatch: /output/entry.txt differs from LINE");
}
