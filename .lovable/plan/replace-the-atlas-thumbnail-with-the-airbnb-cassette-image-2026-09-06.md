# Replace the Atlas thumbnail with the Airbnb cassette image

## What
Swap the placeholder Atlas project cover on the homepage with the user-uploaded Airbnb cassette tape image (`user-uploads://Your_paragraph_text.png`, 1200×762 PNG). No SVG needed — the PNG is high-res and the card crops with `object-cover`, so it will look crisp at the displayed size. Only the Atlas thumbnail changes; the other generated artwork stays as-is.

## Steps
1. Upload the uploaded image to Lovable Assets from `/mnt/user-uploads/` so it's served from the CDN (keeps the repo lightweight):
   ```bash
   lovable-assets create --file /mnt/user-uploads/Your_paragraph_text.png --filename work-atlas-airbnb.jpg > src/assets/work-atlas-airbnb.jpg.asset.json
   ```
2. In `src/lib/projects.ts`, import the new pointer and set the Atlas project's `image` to its CDN URL:
   ```ts
   import atlasAirbnb from "@/assets/work-atlas-airbnb.jpg.asset.json";
   // ...
   { title: "Atlas", ..., image: atlasAirbnb.url, featured: true }
   ```
3. Remove the now-unused `workAtlas` (`@/assets/work-atlas.jpg`) import from the top of the file.

## Verify
- `bun run build` passes.
- Preview the homepage: the Atlas card shows the cassette image; other cards are unchanged.
