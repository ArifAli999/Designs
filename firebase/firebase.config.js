// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from 'firebase/functions'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDutf4fI0vMPPxO11-r8CreZy3Px1iVNgo",
    authDomain: "chatapp-983eb.firebaseapp.com",
    projectId: "chatapp-983eb",
    storageBucket: "chatapp-983eb.appspot.com",
    messagingSenderId: "577949538210",
    appId: "1:577949538210:web:42e3b4802db5e4f02684fb",
    measurementId: "G-PY8W8SNSNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();