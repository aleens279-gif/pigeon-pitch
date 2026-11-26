// Pigeon Pitch — a city pigeon's elevator pitch to investors for its startup (rev 2)
// 152 of 200 chars max; one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: one crumb in, a flock out, and the seed round is literal.
const PARTS = [
  "I’m a city pigeon",
  "with a proven model:",
  "I turn one breadcrumb",
  "into a flock. Seeking seed",
  "funding — literally, seeds — to scale to every park in the city.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
