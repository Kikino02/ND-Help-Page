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
                manage: resolve(__dirname, './OtherSites/manage/manage.html'),
                manage2: resolve(__dirname, './OtherSites/manage2/manage2.html'),
                manage3: resolve(__dirname, './OtherSites/manage3/manage3.html'),
                authenticate: resolve(__dirname, './OtherSites/authenticate/authenticate.html'),
                support: resolve(__dirname, './OtherSites/support/support.html'),

                // reusable-components
                navbar: resolve(__dirname, './reusable-components/navbar/navbar.html'),
                article: resolve(__dirname, './reusable-components/article/article.html'),
                footer: resolve(__dirname, './reusable-components/footer/footer.html'),
            },
        },
    },
});