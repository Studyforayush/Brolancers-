import { promises as fs } from "node:fs";
import { join } from "node:path";

async function getServerModule() {
  try {
    // Try loading from .server-dist (Vercel production)
    const modulePath = join(process.cwd(), "api", ".server-dist", "index.js");
    const module = await import(modulePath);
    return module.default;
  } catch (e1) {
    try {
      // Try from dist (local dev/preview)
      const modulePath = join(process.cwd(), "dist", "server", "index.js");
      const module = await import(modulePath);
      return module.default;
    } catch (e2) {
      console.error("Failed to load server module from both paths", e1, e2);
      throw new Error("Could not load server module");
    }
  }
}

let cachedServer: any = null;

async function getServer() {
  if (cachedServer) return cachedServer;
  cachedServer = await getServerModule();
  return cachedServer;
}

function buildRequest(req: any) {
  const host = req.headers?.host ?? "localhost";
  const url = new URL(req.url ?? "", `https://${host}`);
  const headers = new Headers();

  for (const [name, value] of Object.entries(req.headers ?? {})) {
    if (Array.isArray(value)) {
      for (const entry of value) {
        if (entry != null) headers.append(name, entry);
      }
    } else if (value != null) {
      headers.append(name, value.toString());
    }
  }

  return new Request(url.toString(), {
    method: req.method,
    headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
  });
}

export default async function handler(req: any, res: any) {
  try {
    const server = await getServer();
    const request = buildRequest(req);
    const response = await server.fetch(request, undefined, undefined);

    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    res.statusCode = response.status;
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (error) {
    console.error("SSR Error:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
