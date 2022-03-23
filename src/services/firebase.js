import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXBxJoF5MEUjxzZ9vzXgtPaSZN1R2-mJA",
    authDomain: "projektas-15c68.firebaseapp.com",
    projectId: "projektas-15c68",
    storageBucket: "projektas-15c68.appspot.com",
    messagingSenderId: "25048199845",
    appId: "1:25048199845:web:d58c57d776b6e9a02d534c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  export default app;
  export {app, db};