// Forçar o motor a construir para o Vercel em vez do Cloudflare
process.env.NITRO_PRESET = 'vercel';

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
});
