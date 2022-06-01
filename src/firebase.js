// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app"
const firebaseConfig = {
    apiKey: "AIzaSyBg8ITAM-tiPow7ca_8sJeN46aR5XJ_oQ0",
    authDomain: "linkedin-clone-ae2fc.firebaseapp.com",
    projectId: "linkedin-clone-ae2fc",
    storageBucket: "linkedin-clone-ae2fc.appspot.com",
    messagingSenderId: "13151282554",
    appId: "1:13151282554:web:813ca962fc0d23139f62c3",
    measurementId: "G-DKK2PQ46ZR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export {db}