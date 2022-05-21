// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwgLpXWR1ynNKfRjS1Pjwq-KqxEJ5fYCU",
    authDomain: "whatsapp-clone-f8eae.firebaseapp.com",
    projectId: "whatsapp-clone-f8eae",
    storageBucket: "whatsapp-clone-f8eae.appspot.com",
    messagingSenderId: "406900824157",
    appId: "1:406900824157:web:66256e390c657a1709d5b4",
    measurementId: "G-22C4PQ2JP1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;
