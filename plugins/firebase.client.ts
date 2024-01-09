import {
  initializeApp 
} from "firebase/app"

import {
  getFirestore
} from "firebase/firestore"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // The Firebase API variables should not really be stored in public
  const app = initializeApp(config.public.firebase)

  const firestore = getFirestore(app)

  // Initialize Firebase with local emulator
  nuxtApp.provide("firestore", firestore)
})
