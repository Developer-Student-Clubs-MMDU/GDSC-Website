// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfl4jAMP7YDNzy6hUGNmRvgKy19vIX9pE",
  authDomain: "fire-base-admin-page.firebaseapp.com",
  projectId: "fire-base-admin-page",
  storageBucket: "fire-base-admin-page.appspot.com",
  messagingSenderId: "768896383960",
  appId: "1:768896383960:web:512c6dd920e160edca10ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);