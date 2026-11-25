// Tell a Whole Story in 32 Characters — make.fun entry.
// Writes one Wi-Fi network name (27 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "MyWiFiLeftMeForTheNeighbour";

// Gate validation: the entry must be one line, 1–32 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 32) {
  throw new Error(`entry must be 1–32 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
