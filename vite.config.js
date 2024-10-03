import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
      output: {
        entryFileNames: "assets/js/[name].js",
        chunkFileNames: "assets/js/[name].js",
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(-1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name][extname]`;
        },
      },
    },
  },
  plugins: [
    {
      name: "html-transform",
      transformIndexHtml(html) {
        html = html.replace(
          /<link rel="stylesheet" crossorigin href="(.*?)">/g,
          '<link rel="stylesheet" href="$1">'
        );
        html = html.replace(
          /<script type="module" crossorigin src="\.\/assets\/js\/(.+?)\.js"><\/script>/,
          '<script src="./assets/js/$1.js" defer></script>'
        );
        return html;
      },
    },
  ],
});
