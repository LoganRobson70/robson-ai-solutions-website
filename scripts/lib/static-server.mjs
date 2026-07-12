import { createReadStream } from "node:fs";
import { access } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import zlib from "node:zlib";

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".glb": "model/gltf-binary",
  ".gltf": "model/gltf+json; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8"
};

const COMPRESSIBLE_TYPES = [
  "application/javascript",
  "application/json",
  "application/xml",
  "image/svg+xml",
  "text/css",
  "text/html",
  "text/javascript",
  "text/markdown",
  "text/plain"
];

function resolveRequestPath(rootDir, urlPath) {
  const cleanPath = decodeURIComponent((urlPath || "/").split("?")[0].split("#")[0]);
  const relativePath = cleanPath === "/" ? "index.html" : cleanPath.replace(/^\/+/, "");
  const absolutePath = path.resolve(rootDir, relativePath);
  const normalizedRoot = path.resolve(rootDir);

  if (!absolutePath.startsWith(normalizedRoot)) {
    return null;
  }

  return absolutePath;
}

function compressionForRequest(request, contentType) {
  if (!COMPRESSIBLE_TYPES.some((type) => contentType.startsWith(type))) {
    return null;
  }

  const acceptedEncoding = request.headers["accept-encoding"] || "";

  if (acceptedEncoding.includes("br")) {
    return {
      encoding: "br",
      stream: zlib.createBrotliCompress()
    };
  }

  if (acceptedEncoding.includes("gzip")) {
    return {
      encoding: "gzip",
      stream: zlib.createGzip()
    };
  }

  return null;
}

export async function startStaticServer(rootDir) {
  const server = http.createServer(async (request, response) => {
    let filePath = resolveRequestPath(rootDir, request.url);

    if (!filePath) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    try {
      try {
        await access(filePath);
      } catch {
        if (!path.extname(filePath)) {
          const htmlCandidate = `${filePath}.html`;
          await access(htmlCandidate);
          filePath = htmlCandidate;
        } else {
          throw new Error("Not found");
        }
      }
      const extension = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[extension] || "application/octet-stream";
      const compression = compressionForRequest(request, contentType);
      const stream = createReadStream(filePath);

      const headers = {
        "Cache-Control": "no-store",
        "Content-Type": contentType,
        "Vary": "Accept-Encoding"
      };

      if (compression) {
        headers["Content-Encoding"] = compression.encoding;
      }

      response.writeHead(200, headers);

      if (compression) {
        stream.pipe(compression.stream).pipe(response);
        return;
      }

      stream.pipe(response);
    } catch (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;

  return {
    baseUrl: `http://127.0.0.1:${port}`,
    async stop() {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      });
    }
  };
}
