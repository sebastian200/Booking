import bodyParser from "body-parser"

export default defineNuxtConfig({
  devtools: {
    enabled: true 
  },
  serverMiddleware: [
    bodyParser.json(),
    "~/server/api/suggestions/write"
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
      }
    }
  },
  plugins: [
    "~/plugins/firebase.client.ts"
  ]
});
