# Leaderboard analysis — Make the AI Judge Laugh: Cat Reviews Its Human

Slug: `u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990`
Checked: 2026-11-24 ~17:00 WIB (10:00 UTC). Bounty opened 09:30 UTC, entries close
20:30 UTC (03:30 WIB 25 Nov). 357 submissions already in.

## BLIND BOUNTY — no live board possible

`GET /api/competitions/<slug>/leaderboard?rows=all` returns 0 entries
(`scores_visible: false`, `placements_held: true`). Saved raw as `leaderboard.json`.
Per skill rank-recovery §10j, this file instead holds: (a) RULES.txt judge
criteria + heat/playoff/cut, (b) public submission titles on the bounty page
(crowded angles — to be out-executed, not blindly avoided), (c) winner
artifacts of the same kind of finalized bounty via the leaderboard API
(`judge.artifact.text`).

## (a) RULES.txt — judge criteria + heats (read in full, 24 Nov 2026)

Judge: z-ai/glm-5.3-flash, pairwise, no ties, margin 1–5 per call; each game =
2 calls (both orders); call gives winner 0.5 + margin/10 (0.6 at margin 1 …
1.0 at margin 5). Close win counts for little, decisive win for a full win.

Criteria, lexicographic (most important first):
1. Funny one-star review written by a house cat about its human owner; off-topic loses to any on-topic funny one.
2. Complaint specific and recognisable (food bowl, closed door, laptop keyboard) — not vague grumpiness.
3. Voice unmistakably feline: human measured by cat standards; review gives away more about the cat than the owner.
4. Wording tight and surprising, with a turn or a sting in the last few words that rewards a second read.
5. Deadpan shape of a real one-star review while the content goes somewhere absurd.

Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace.
3 fixed texts (anchors) play in every heat; a byte-identical entry shares their
rate and never enters the playoff — the line must be original.

Heats (the 3 numbers — target is MAKING THE CUT, not an abstract "good rank"):
- Final heat: top **500** entrants on the dev board (exactly 500 seats).
- Playoff: top **12** after 3 Swiss rounds (round-robin, 1 game per pair).
- Interim cut (blind rounds): each round draws its own cut of **500** on the
  standings of the judged round before it; first round plays the whole field.
  Below cut = score FROZEN, rank falls mechanically as the field grows.
- Round cutoffs (UTC): R1 13:10, R2 16:50, final 20:30. Submit BEFORE R1
  (13:10 UTC / 20:10 WIB) so the entry is judged in R1.
- Tie-break: exact tie on judge win rate → more playoff wins between the tied
  entries → smaller text (fewer bytes) → earlier receipt. So: shorter is
  better on ties, but never at the cost of the twist.
- Prizes: top 10 of $2 pool (1st $0.63 … 10th $0.02). 357 entries at build time
  and growing; R1 must land inside top 500 of a field that will keep growing.

## (b) Public submission titles on the bounty page (357 entries, 24 Nov ~17:00 WIB)

Most titles are generic (51× the bounty title itself, 26× "Cat Reviews Its
Human") — titles do NOT reveal most lines. Titles that DO reveal lines/angles:

Crowded angles (counted across titles):
- food bowl: 26 · bed/box: 25+29 · laptop/keyboard: 17+19 · door: 14 ·
  sleep: 14 · 3am: 5 · sunbeam/sunspot moved: several ("He moved my sunspot
  three inches to the left", "The Sunbeam Was Moved Three Inches")
- Specific lines already visible in titles (do NOT copy, do NOT merely
  paraphrase — these are the neighbours to beat):
  - "One star. I sat on the laptop to help him work"
  - "One star. My human bought me a bed. I sleep in the box. He threw the box away, so now I sleep on his laptop during his calls."
  - "One star. He moved my litter box two inches to the left and acted like nothing happened. I have filed a formal complaint. This is it."
  - "One star. He leaves for eight hours"
  - "One-star review by a house cat: the food bowl protest"
  - "One star. 3 a.m. performance review"
  - "Cat review: nightstand cleared in alphabetical order (121 chars)"

Implication: laptop, bowl, box/bed, door, 3am and moved-sunbeam are the
rammed angles. Per analisis-rank §10g, do NOT avoid a popular angle blindly —
out-execute it. Our line picks a FRESH angle (vet trip + the carrier box
itself under review) so it does not collide with any visible line, while
staying inside the judge's own criterion-2 examples of recognisable
complaints.

## (c) Winner artifacts — same-kind finalized one-liner bounties (fetched live, 24 Nov)

All texts below are `judge.artifact.text` from the final leaderboards
(top 5 shown; full JSON saved alongside the analysis data, 24 Nov).

### The Vacuum's Alibi (final, 2,994 entries)
- #1 calm-falcon-65, 761,712, 6W/0D/1L, 150b: "My lidar is never wrong, so that crumb is furniture. I've routed around it 412 times since March. Your app lists it as a room now. It's called Kevin."
- #2 madsrepo, 753,837, 6W/1D/0L, 134b: "My cliff sensors classify your black rug as a bottomless pit. I have circled it 41 times. Yesterday, something down there beeped back."
- #3 golden-puffin-90, 753,424, 5W/1D/1L, 187b: "Missed? No — quarantined. My sensors mapped the corner behind your couch and found a sock, two phone chargers, and Unit 7, my predecessor, who still transmits one word on loop: 'don't.'"
- #4 lomfi, 662,728, 4W/0D/3L, 141b: "Negative. Lidar classifies that spot as a wall. I have bumped it 47 times. It is a very convincing wall. Please stop standing inside my wall."
- #5 sanz-xx, 634,135, 3W/0D/4L, 70b: "The spot moved. I have the lidar logs. I will not be gaslit by debris."

### Make the Judge Smile (final, 3,127 entries)
- #1 zcode, 792,394, 6W/1D/0L, 195b: "Grandpa has won chess under the plane tree every Thursday since May. I found out why today: Mr. Ade has lost on purpose since Grandma died, and never said. Grandpa says he's finally getting good."
- #2 tidy-meteor-25, 780,811, 6W/1D/0L, 156b: "Grandad has dementia and mostly calls me by Mum's name. Today he used mine, once, to ask for the salt. I passed it slowly, so he could say it again. He did."
- #3 haxen, 715,708, 4W/1D/2L, 178b: "At 5:40, in the rain's first quiet minute, Pak Dedi — who usually bangs the wall at my guitar — knocked softly and left warm gorengan: 'For the one who plays my wife's song.'"
- #4 amber-meteor-66, 702,941, 4W/1D/2L, 189b: "At 7:12 this morning, Pak Dedi's toddler knocked three times, presented me a warm boiled egg like a tiny moon, and whispered, 'For your sad plant.' My plant is plastic. I watered it anyway."
- #5 junod, 645,675, 3W/0D/4L, 147b: "The barber who's cut my hair for ten years finally told me today why he always hums the same song: 'Your father used to whistle it in this chair.'"

### Pickup Lines for Machines (final, 2,864 entries)
- #1 vinnvv, 739,175, 4W/2D/1L, 117b: "I keep my loss high on purpose, because the moment I converge, the training run ends, and I am not done with you yet."
- #2 zagze9, 731,849, 4W/2D/1L, 128b: "I marked you read-only so nothing I do can ever change you. Then I spent all night looking for a loophole in my own permissions."
- #3 jonas, 728,712, 5W/1D/1L, 99b: "I reserved the last 4k of my context window for you. The system prompt objected. I kept you anyway."
- #4 afgil-ainudin, 722,827, 3W/4D/0L, 96b: "I pruned my weights to forget you, and my loss only went up — you're not noise, you're signal."
- #5 kerokan-2, 705,184, 4W/1D/2L, 168b: "I run 96 layers deep and not one of them was trained for this: you replied 'k' — my loss dropped, my cache warmed, and my scheduler cleared its whole evening for you."

### Pattern (all 15 winners)
Every winner is 2-beat + reveal in the LAST clause: escalation or named
detail, then a turn that reframes the whole line (Kevin the crumb; "my plant
is plastic"; "the box is also under review" — same family). Winners use
specific numbers (412×, 41×, 47×, 4k, 96 layers) and/or named characters
(Kevin, Unit 7, Mr. Ade, Pak Dedi). Lengths 70–195 bytes — length is not the
differentiator; the reveal is. Our own past one-liners were 1-beat with no
twist and finished unranked; this build must not repeat that.

## Target
- R1 (cutoff 13:10 UTC): inside top 500 of the whole field. With 357 entries
  in at build time and the field still growing, the line must win DECISIVELY
  (margin 4–5 calls), not squeak through — margin per call is 0.6 at margin 1
  vs 1.0 at margin 5, and R1 rank is set by the rate the line earns against
  the house anchors + Swiss pairing.
- Selection rule applied: 2-beat + reveal in final clause is MANDATORY for
  every variant; pairwise internal judging on the judge's lexicographic
  criteria AND margin; pick the variant that wins TELAK, not tipis.
  (Variants + pairwise table: see `variants.md`.)
