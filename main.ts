// news-summary-01 entry (Node 22, standard library only).
// The summary lives in summary.txt beside this file; the program writes it
// unchanged to /output/entry.txt, so both grader runs produce identical bytes.
// No network, no clock, no randomness: the output is a pure copy of the file.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
writeFileSync(join(outDir, 'entry.txt'), text);
