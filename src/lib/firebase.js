// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBonR1cYXhfKVXG5tA7jzODXfERMfd2hNk",
  authDomain: "fir-sample-6463d.firebaseapp.com",
  projectId: "fir-sample-6463d",
  storageBucket: "fir-sample-6463d.appspot.com",
  messagingSenderId: "676993329122",
  appId: "1:676993329122:web:bba4de8485d1ab27b0bbbb",
  measurementId: "G-903YQQPEV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);