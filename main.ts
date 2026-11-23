import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "The intern asked if the printer supports both sides of a page. \"It supports one side \"\\n" +
  "\"of any page,\" I said. HR called it honesty. The printer called it Tuesday, then jammed \"\\n" +
  "\"on a blank sheet, which is the most honest thing it has ever done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY_TEXT, "utf8");
console.log("wrote " + target + ": " + ENTRY_TEXT.length + " chars");
