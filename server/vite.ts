import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // In Vercel serverless environment, resolve the path to dist/public
  // Check different possible locations where files might be in Vercel
  let distPath = path.resolve(process.cwd(), 'dist', 'public');
  
  // If that doesn't exist, try alternative locations
  if (!fs.existsSync(distPath)) {
    distPath = path.resolve(__dirname, '..', 'dist', 'public');
  }
  
  // If that doesn't exist either, try relative to current file
  if (!fs.existsSync(distPath)) {
    distPath = path.resolve(__dirname, '..', '..', 'dist', 'public');
  }
  
  // If none of the paths exist, throw an error
  if (!fs.existsSync(distPath)) {
    console.error('Could not find dist/public directory in any expected location');
    console.error('Tried:', [
      path.resolve(process.cwd(), 'dist', 'public'),
      path.resolve(__dirname, '..', 'dist', 'public'),
      path.resolve(__dirname, '..', '..', 'dist', 'public')
    ]);
    // Instead of throwing an error that would crash the function, we'll set up a fallback
    app.use("*", (_req, res) => {
      res.status(404).send("Build directory not found");
    });
    return;
  }

  app.use(express.static(distPath));

  // fall through to index.html for client-side routing
  app.get(/.*/, (req, res) => {
    // Don't interfere with API routes (though they should be handled first)
    if (req.path.startsWith('/api/')) {
      res.status(404).json({ error: 'API endpoint not found' });
      return;
    }
    
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
