// https://nuxt.com/docs/api/configuration/nuxt-config

import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'nuxt-primevue',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    runtimeConfig: {
      public: {
            baseURL: process.env.BASE_URL || 'http://localhost:8080/api/v1'
      }
    },
    tailwindcss: {
        config: {
            content: [
                './components/**/*.vue'
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
    }
})

