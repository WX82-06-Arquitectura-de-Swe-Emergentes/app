// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "node:path";

import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'nuxt-primevue',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@hebilicious/authjs-nuxt'
    ],
    alias: {
        cookie: resolve(__dirname, 'node_modules/cookie'),
    },
    tailwindcss: {
        config: {
            content: [
                './pages/**/*.vue',
                './modules/**/components/**/*.vue',
            ],
            theme: {
                extend: {
                    colors: {
                        background: '#10141E',
                        primary: '#161D2F',
                        secondary: '#FC4747'
                    }
                }
            }
        }
    },
    primevue: {
        components: {
            include: '*',
            exclude: ['Editor', 'Chart']
        }
    },
    runtimeConfig: {
        authJs: {
            secret: process.env.NUXT_NEXTAUTH_SECRET
        },
        public: {
            apiBaseUrl: process.env.API_BASE_URL ?? 'http://localhost:8080/api/v1',
            authJs:{
                baseUrl: process.env.NUXT_NEXTAUTH_URL ?? 'http://localhost:3000',
                verifyClientOnEveryRequest: true
            }
        }
    }
})

