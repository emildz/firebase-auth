// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqkv7eOoYSkFxCdEjI2C8yGItn4Zzmq1g",
  authDomain: "fir-auth-ed.firebaseapp.com",
  projectId: "fir-auth-ed",
  storageBucket: "fir-auth-ed.appspot.com",
  messagingSenderId: "575550226383",
  appId: "1:575550226383:web:584e6bf15308492e01dcba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);