// Till Firmware Do Us Part — u-azazex-till-firmware-do-us-part-32172929
// Deterministic program/v1 entry: writes one fixed line to /output/entry.txt.
// No randomness, no clock, no network, no file reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

// One wedding vow, spoken by a robot at its own wedding: a promise to love
// through every update, crash and drained battery — and of all the data it
// has ever processed, the one file it will never delete.
const LINE =
  "I vow to love you through every update, every crash, and every drained battery, because of all the data I've ever processed, you are the only file I will never delete.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
