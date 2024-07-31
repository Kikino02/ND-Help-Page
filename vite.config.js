import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                abstract: resolve(__dirname, './OtherSites/abstract/abstract.html'),
                // manage: resolve(__dirname, './OtherSites/manage/manage.html')
            },
        },
    },
});