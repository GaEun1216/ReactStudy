// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf8i7uuYEqOusCfsnjCsvX2MT-ewq2tTM",
  authDomain: "test-921f8.firebaseapp.com",
  databaseURL: "https://test-921f8-default-rtdb.firebaseio.com",
  projectId: "test-921f8",
  storageBucket: "test-921f8.appspot.com",
  messagingSenderId: "320684433449",
  appId: "1:320684433449:web:7207e85a411cc42af57c38",
  measurementId: "G-DM95L40522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);