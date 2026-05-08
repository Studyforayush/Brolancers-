import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let cachedServer = null;

async function loadServer() {
  if (cachedServer) return cachedServer;
  
  try {
    const serverPath = join(__dirname, '.server-dist', 'index.js');
    const module = await import(serverPath);
    cachedServer = module.default || module;
    return cachedServer;
  } catch (error) {
    console.error('Failed to load server:', error);
    throw new Error(`Could not load server: ${error.message}`);
  }
}

function buildRequest(req) {
  const host = req.headers?.host ?? 'localhost';
  const proto = req.headers['x-forwarded-proto'] ?? 'https';
  const url = new URL(req.url ?? '/', `${proto}://${host}`);
  
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers || {})) {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        headers.append(key, value.join(', '));
      } else {
        headers.append(key, String(value));
      }
    }
  }

  const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : req.body;
  
  return new Request(url.toString(), {
    method: req.method,
    headers,
    body: body ? (typeof body === 'string' ? body : JSON.stringify(body)) : undefined,
  });
}

export default async function handler(req, res) {
  try {
    console.log(`[SSR] ${req.method} ${req.url}`);
    
    const server = await loadServer();
    const request = buildRequest(req);
    const response = await server.fetch(request, undefined, undefined);

    res.statusCode = response.status;
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

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
          <p>${error.message || 'Unknown error'}</p>
          <pre>${error.stack || ''}</pre>
        </body>
      </html>
    `);
  }
}
