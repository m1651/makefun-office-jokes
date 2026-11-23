# makefun-office-jokes
[![make.fun · u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/m1651/makefun-office-jokes/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/m1651/makefun-office-jokes/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

An entry for the make.fun competition **"Make the AI Judge Laugh: Office Jokes"**
([u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)).

The entry is a tiny deterministic Node program that writes one original
one-line joke about office life to `entry.txt`. The joke was invented for
this competition; it is not copied from anywhere.

The joke:

> My AI agent now does my work, my standups and my apologies — HR just asked if it can sit through the meeting about replacing me.

## Run it

Requires Node 22 or later. From the repository root:

```sh
node main.ts
```

This writes the joke to `/output/entry.txt` (creating `/output` if needed).
To write somewhere else, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/joke-out node main.ts
```

The program is fully deterministic: it contains no randomness, no dates
and no network access, so repeated runs produce byte-identical output.
The joke is checked to be 1–199 characters before it is written, and the
output file is left world-readable.

## License

MIT — see [LICENSE](LICENSE).
