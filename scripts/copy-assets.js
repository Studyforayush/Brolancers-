import { mkdir, rm, cp } from "node:fs/promises";
import { join } from "node:path";

const src = join(process.cwd(), "dist", "client", "assets");
const dest = join(process.cwd(), "public", "assets");

await rm(dest, { recursive: true, force: true });
await mkdir(dest, { recursive: true });
await cp(src, dest, { recursive: true, force: true });
console.log("Copied client assets to public/assets");
