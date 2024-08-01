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
                abstract: resolve(__dirname, './Site/abstract/using-abstract.html'),
                manage: resolve(__dirname, './Site/manage/manage-billing/manage.html'),
                manage2: resolve(__dirname, './Site/manage/manage-organizations/manage.html'),
                manage3: resolve(__dirname, './Site/manage/manage/billing/manage.html'),
                authenticate: resolve(__dirname, './Site/authenticate-to-abstract/authenticate.html'),
                support: resolve(__dirname, './Site/support/support.html'),

                // reusable-components
                navbar: resolve(__dirname, './reusable-components/navbar/navbar.html'),
                article: resolve(__dirname, './reusable-components/article/article.html'),
                footer: resolve(__dirname, './reusable-components/footer/footer.html'),
            },
        },
    },
});