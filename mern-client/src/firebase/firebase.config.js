// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBawWRhb35sVMVrumT0wn0NmwZLaLFBMj4",
  authDomain: "mern-book-inventory-8e778.firebaseapp.com",
  projectId: "mern-book-inventory-8e778",
  storageBucket: "mern-book-inventory-8e778.appspot.com",
  messagingSenderId: "614945087310",
  appId: "1:614945087310:web:eac690a20a4404c418481f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;