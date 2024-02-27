import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [vue(), dts({})],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['es', 'cjs'],
            name: 'UILib',
            fileName: 'main'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
