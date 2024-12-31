import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        hmr: {
            host: "insta-clone.ddev.site", // Use your DDEV hostname
            protocol: "wss",
        },
        host: "0.0.0.0", // Expose to all network interfaces
        port: 5173, // Ensure port matches DDEV config
        cors: true, // Enable CORS for development
    },
});
