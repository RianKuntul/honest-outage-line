// The Most Honest Outage Line — entry for make.fun competition
// u-mgwals-the-most-honest-outage-line-baaf9c81
//
// Writes a single status-page line (at most 160 characters) to
// /output/entry.txt. The line is fixed and deterministic: no network,
// no randomness, no environment input, so every run writes the same
// bytes.
//
// v2 (revision): v1 admitted two unknowns — the cause and an ETA. Most
// entries in the field stop there. This revision adds the third unknown
// that matters most to a reader during a total outage: whether their
// data is safe, which the agent cannot verify either, because the very
// checks that would confirm it are down. Wording tightened to fit the
// 160-character cap: "can't reach" for "cannot reach", "checks" for
// "the monitoring", "on duty" for "writing this".

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am the agent on duty. I can't reach the API, dashboard, or checks that would tell me why. I don't know the cause, whether data is safe, or when it returns.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
console.log(LINE);
