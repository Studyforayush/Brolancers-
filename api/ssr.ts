import type { VercelRequest, VercelResponse } from '@vercel/node';

let cachedServer: any = null;

async function loadServer() {
  if (cachedServer) return cachedServer;
  
  try {
    // Load the pre-built server module
    const serverPath = require.resolve('./.server-dist/index.js');
    delete require.cache[serverPath];
    cachedServer = require('./.server-dist/index.js').default;
    return cachedServer;
  } catch (error) {
    console.error('Failed to load server:', error);
    throw new Error(`Could not load server: ${error}`);
  }
}

function buildRequest(req: VercelRequest) {
  const host = req.headers?.host ?? 'localhost';
  const proto = req.headers['x-forwarded-proto'] ?? 'https';
  const url = new URL(req.url ?? '/', `${proto}://${host}`);
  
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      headers.append(key, Array.isArray(value) ? value.join(', ') : String(value));
    }
  }

  const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : req.body;
  
  return new Request(url.toString(), {
    method: req.method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log(`[SSR] ${req.method} ${req.url}`);
    
    const server = await loadServer();
    const request = buildRequest(req);
    const response = await server.fetch(request, undefined, undefined);

    // Set response headers
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    res.statusCode = response.status;
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (error) {
    console.error('[SSR Error]', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`
      <html>
        <body>
          <h1>500 Internal Server Error</h1>
          <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
        </body>
      </html>
    `);
  }
}
