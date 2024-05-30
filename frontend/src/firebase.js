// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpGFH5zGMtlYSBaPi_jjF4wPzfyCnnBkI",
  authDomain: "numbergame-12adf.firebaseapp.com",
  projectId: "numbergame-12adf",
  storageBucket: "numbergame-12adf.appspot.com",
  messagingSenderId: "754170767403",
  appId: "1:754170767403:web:4ba69ee255def307f9226e",
  measurementId: "G-B2VNJM0Z5C"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};