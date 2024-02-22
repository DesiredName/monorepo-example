import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            formats: ['es', 'cjs'],
            name: 'DBClientService',
            fileName: 'main',
        },
        rollupOptions: {
            external: ['lodash'],
            output: {
                globals: {
                    lodash: 'lodash',
                },
            },
        },
    },
    plugins: [
        dts({
            rollupTypes: true,
        }),
    ],
});
