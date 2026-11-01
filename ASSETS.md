# Card images

Every product and project card runs a slideshow. The frames live in
`public/projects/products/` and `public/projects/templates/`, and the list of
frames for each card is in `src/data/products.js` and `src/data/projects.js`
under the `images:` key.

## How the frames were made

Your raw screenshots were all different shapes — 1900×900 site captures,
1080×1920 phone screenshots, 1400×560 store banners. Dropping those straight
into one card shape would have cropped heads off some and squashed others.

No mats, no letterboxing. Each screenshot is converted to WebP at its own
proportions and the card fills itself with it, anchored to the top — the same
treatment the original site used.

The card shape matches the source shape so nothing is squashed or bordered:

* **Live sites** (templates): captures are 2.0–2.2 wide, card is `aspect-[16/10]`
  so the image sits at a similar height to the older project cards.
* **Products**: store screenshots are exactly 1280×800, card is `aspect-[16/10]`
  — a perfect fill with zero crop.
* **Older projects** (ASA, JARVIS, CodeFlow, PFS…): untouched original PNGs in
  a taller `aspect-[4/3]` card, filled from the top.

Habitlee's screenshots are portrait, so they are the one composed set: two
phones across a 16:10 frame.

Store marquees (1400×560) and promo tiles (440×280) are deliberately left out
— wrong shape for a landscape card, and the tiles are too small to upscale.

## Adding or replacing a frame

1. Save the new image anywhere on your machine.
2. Run it through the same treatment — or just drop a 1600×1000 image straight
   into the right folder, named to continue the sequence
   (e.g. `kava-8.webp`).
3. Add its path to the `images:` array for that card.

The script that produced them is not in this repo — ask and I'll regenerate
from new raws.

## Frame counts

| Card | Frames |
|---|---|
| Habitlee | 3 (two-up phone frames) |
| Word & Character Counter | 2 |
| Volume Booster + EQ | 5 |
| Link Copier | 2 |
| TR Dev Studio | 6 |
| Hora XII | 6 |
| Lumina | 6 |
| Zeya | 8 |
| Kava | 7 |
| ProjectDoc | 8 |

More frames for any product card just need more 1280x800 captures, which is
the exact 16:10 the cards use. Drop them in the folder, continue the numbering,
and add the paths to that card's images array.
