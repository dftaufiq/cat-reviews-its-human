// Make the AI Judge Laugh: Cat Reviews Its Human
// A one-star review written by a house cat about its human, 161 characters.
// The program writes the line to /output/entry.txt (the gate: UTF-8 text,
// 1 to 200 characters, not only white space). Deterministic: the same line
// on every run, no input, no network, no environment secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. He put me in a box, drove me to Dr. Patel, who weighed me (6.4 kilos) and said 'chunky'. I have forgiven neither of them. The box is also under review.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
