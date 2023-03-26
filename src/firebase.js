// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy5t-940E7GenlwXceRyHbMrtrNiy4e4g",
  authDomain: "contact-book-bd7ee.firebaseapp.com",
  projectId: "contact-book-bd7ee",
  storageBucket: "contact-book-bd7ee.appspot.com",
  messagingSenderId: "433495871021",
  appId: "1:433495871021:web:b54ad4dfc5c02a54fa32a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
