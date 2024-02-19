import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => { // This is the plugin that will be used to initialize the Firebase app and provide the auth object to the app
  /* const config = useRuntimeConfig(); */ // This is not working, so I have to use the public config

  const firebaseConfig = {
    apiKey: "AIzaSyC_QQUDLco8MkT4UviLa62R3V6WBTgZzrU",
    authDomain: "booking-46742.firebaseapp.com",
    projectId: "booking-46742",
    storageBucket: "booking-46742.appspot.com",
    messagingSenderId: "472457988690",
    appId: "1:472457988690:web:20d8015c28f441ba3c2d8b"
  };

  // The Firebase API variables should not really be stored in public, but whp cares for now

  const app = initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  // Initialize Firebase with local emulator


  const auth = getAuth(app); // This is the auth object that can be used to sign in and sign up users



  function signUp(email = "", password = "", FirstName = "", LastName = "") {
    console.log("signUp function")
    createUserWithEmailAndPassword(auth, email, password)
    .then(function() {
      let user = auth.currentUser;
      let database_user = firestore.collection("users/" + user.uid).doc(user.uid);
      let data = {
        email: email,
        FirstName: FirstName,
        LastName: LastName
      };
      database_user.set(data)
      })
      
  
  .catch(function(error) {
    console.error(error);
    alert(error);
  });
}

function signIn(email = "", password = "") {
  signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user
  })
  .catch(function(error) {
    console.error(error);
  });
}

});

 