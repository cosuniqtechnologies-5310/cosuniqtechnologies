// Generates smaller responsive variants of images that are displayed far below
// their intrinsic size (fixes Lighthouse "Improve image delivery").
// Run:  node scripts/optimize-images.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "assets");
const img = (f) => path.join(root, "images", f);

// [source file, output width, output file]
const jobs = [
  ["cash-flow.webp", 300, "cash-flow-300.webp"],
  ["colloboaration.webp", 400, "colloboaration-400.webp"],
  ["speed.webp", 400, "speed-400.webp"],
  ["team.webp", 400, "team-400.webp"],
  ["sellgy_ui.webp", 380, "sellgy_ui-380.webp"],
  ["sellgy_ui.webp", 480, "sellgy_ui-480.webp"],
  ["shopify_sync_ui.webp", 380, "shopify_sync_ui-380.webp"],
  ["shopify_sync_ui.webp", 480, "shopify_sync_ui-480.webp"],
  ["classbell_ui.webp", 380, "classbell_ui-380.webp"],
  ["classbell_ui.webp", 480, "classbell_ui-480.webp"],
  ["orangebabe_mockup.webp", 380, "orangebabe_mockup-380.webp"],
  ["orangebabe_mockup.webp", 480, "orangebabe_mockup-480.webp"],
];

for (const [src, width, out] of jobs) {
  const info = await sharp(img(src))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 70, effort: 6 })
    .toFile(img(out));
  console.log(`${out}: ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)} KiB`);
}

// Logos: 1x (169x35) for standard displays / Lighthouse audit, 2x (338x70) for retina
for (const [src, out1x, out2x] of [
  ["cosuniq-technologies.png", "cosuniq-technologies.webp", "cosuniq-technologies-2x.webp"],
  ["cosuniq-academy.png", "cosuniq-academy.webp", "cosuniq-academy-2x.webp"],
]) {
  const info1x = await sharp(path.join(root, src))
    .resize({ width: 169, withoutEnlargement: true })
    .webp({ quality: 75, effort: 6 })
    .toFile(path.join(root, out1x));
  console.log(`${out1x}: ${info1x.width}x${info1x.height} ${(info1x.size / 1024).toFixed(1)} KiB`);

  const info2x = await sharp(path.join(root, src))
    .resize({ width: 338, withoutEnlargement: true })
    .webp({ quality: 65, effort: 6 })
    .toFile(path.join(root, out2x));
  console.log(`${out2x}: ${info2x.width}x${info2x.height} ${(info2x.size / 1024).toFixed(1)} KiB`);
}

