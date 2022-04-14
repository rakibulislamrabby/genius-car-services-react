// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDZDWe-PkD-S7obl-5SX59eea2jyHWEEqE",
    authDomain: "genius-car-service-6db31.firebaseapp.com",
    projectId: "genius-car-service-6db31",
    storageBucket: "genius-car-service-6db31.appspot.com",
    messagingSenderId: "765790894636",
    appId: "1:765790894636:web:969039aef2231dcd24af89"
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;