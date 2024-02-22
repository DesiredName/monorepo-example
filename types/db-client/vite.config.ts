import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            formats: ['es', 'cjs'],
            name: 'CommonDBClientEntitiesLib',
            fileName: 'main',
        },
    },
    plugins: [
        dts({
            rollupTypes: true,
        }),
    ],
});
