// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "weather-app-3a7ba.firebaseapp.com",
  projectId: "weather-app-3a7ba",
  storageBucket: "weather-app-3a7ba.appspot.com",
  messagingSenderId: "744654142911",
  appId: "1:744654142911:web:b533eb3e1f4987b8a4350a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
