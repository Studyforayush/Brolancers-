import { mkdir, rm, cp } from "node:fs/promises";
import { join } from "node:path";

const clientAssetsSrc = join(process.cwd(), "dist", "client", "assets");
const clientAssetsDest = join(process.cwd(), "public", "assets");

const serverSrc = join(process.cwd(), "dist", "server");
const serverDest = join(process.cwd(), "api", ".server-dist");

// Copy client assets to public
await rm(clientAssetsDest, { recursive: true, force: true });
await mkdir(clientAssetsDest, { recursive: true });
await cp(clientAssetsSrc, clientAssetsDest, { recursive: true, force: true });
console.log("✓ Copied client assets to public/assets");

// Copy server dist to api for serverless access
await rm(serverDest, { recursive: true, force: true });
await mkdir(serverDest, { recursive: true });
await cp(serverSrc, serverDest, { recursive: true, force: true });
console.log("✓ Copied server dist to api/.server-dist");

