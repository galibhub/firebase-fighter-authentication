// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjTnV0gODGgFeOzyg0qbN4p05QOA-PrAU",
  authDomain: "fir-fighter-3a3d1.firebaseapp.com",
  projectId: "fir-fighter-3a3d1",
  storageBucket: "fir-fighter-3a3d1.firebasestorage.app",
  messagingSenderId: "1041862447219",
  appId: "1:1041862447219:web:82958def7f97d42aa7da06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
