// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhpFmjFCqNdek5kWVYPX7iJ4NhK4pru64",
  authDomain: "pipeline-dfce9.firebaseapp.com",
  projectId: "pipeline-dfce9",
  
  storageBucket: "pipeline-dfce9.appspot.com",
  messagingSenderId: "237943067622",
  appId: "1:237943067622:web:0a91ef4d5704cfb0997c27",
  measurementId: "G-5XJ2X48E09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);