// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbH8cJPxqkL_JITugHYSk0dwNeyWXzT3s",
  authDomain: "inventure-d6152.firebaseapp.com",
  projectId: "inventure-d6152",
  storageBucket: "inventure-d6152.firebasestorage.app",
  messagingSenderId: "779148239196",
  appId: "1:779148239196:web:f292466b2148d754856199",
  measurementId: "G-9RQHHCT6H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;