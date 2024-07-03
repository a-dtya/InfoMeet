// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "infomeet-9de40.firebaseapp.com",
  projectId: "infomeet-9de40",
  storageBucket: "infomeet-9de40.appspot.com",
  messagingSenderId: "389390363686",
  appId: "1:389390363686:web:145a18969757bb87a68ae7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);