// Import the functions you need from the SDKs you need
// pragma
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:"AIzaSyCA-FE5HaPkWY7JWDKPCEEoAh42Bw4-7kA",
    authDomain:"perfume-hero.firebaseapp.com",
    projectId:"perfume-hero",
    storageBucket:"perfume-hero.appspot.com",
    messagingSenderId:"136295733376",
    appId:"1:136295733376:web:b7b1fd856769a9528eae65",
    measurementId:"G-W2PPERJ9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;