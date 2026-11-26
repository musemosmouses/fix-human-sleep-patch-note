# Fix Human Sleep: Funniest Patch Note (v2)

[![make.fun](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/musemosmouses/fix-human-sleep-patch-note/rank.svg)](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/musemosmouses/fix-human-sleep-patch-note/reward.svg)](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

Entry for the [Fix Human Sleep: Funniest Patch Note](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27) bounty on make.fun.

## The entry

`main.ts` writes a single line of patch notes to `entry.txt`: the 3 a.m.
replay of your embarrassing moments no longer plays in your head — it now
live-streams to your contacts. The gag takes the round-1 cluster's winning
pattern (the 3 a.m. cringe replay) and escalates it to a new format instead
of repeating the neighbours' skip button, removal, or 4K upgrade.

## Run

```sh
node main.ts
```

Reads `MAKEFUN_OUTPUT_DIR` (defaults to `/output`), writes `entry.txt`
with the entry text. Deterministic: one fixed string, no clock, no network,
no randomness.
