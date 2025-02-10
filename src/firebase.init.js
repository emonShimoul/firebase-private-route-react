// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_JZCMtiytkPB_AAcUiVsxRRews8Zn4Yc",
  authDomain: "fir-private-route-26813.firebaseapp.com",
  projectId: "fir-private-route-26813",
  storageBucket: "fir-private-route-26813.firebasestorage.app",
  messagingSenderId: "154942016065",
  appId: "1:154942016065:web:8e7ad725f4b578a64f54c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
