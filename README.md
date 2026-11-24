# Till Firmware Do Us Part

[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Kkajasd/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Kkajasd/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

One line: a robot's wedding vow, written to `/output/entry.txt`.

> I vow to love you through every update, every crash, and every drained battery, because of all the data I've ever processed, you are the only file I will never delete.

Entry for [make.fun's "Till Firmware Do Us Part" bounty](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929) — $2.50, top 10 split the pool, judged pairwise by an AI judge. The line is 167 characters, one line, no trailing newline.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. The program is deterministic: it writes the same single line every run, creates `/output` if missing, and never touches the network or reads files outside this repo.
