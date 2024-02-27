// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    appConfig: {
        'server-connection-string': 'http://localhost:3000'
    },

    devtools: { enabled: false },

    devServer: {
        port: 7070
    },

    modules: ['@pinia/nuxt']
});
