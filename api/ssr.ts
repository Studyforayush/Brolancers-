import server from "../dist/server/index.js";

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
  const request = buildRequest(req);
  const response = await server.fetch(request, undefined, undefined);

  response.headers.forEach((value, name) => {
    res.setHeader(name, value);
  });

  res.statusCode = response.status;
  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
