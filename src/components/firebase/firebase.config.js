// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB63qeeQXUJAjluW38-7saC2JwBI_WO2DU",
  authDomain: "contextapi-ahthentication.firebaseapp.com",
  projectId: "contextapi-ahthentication",
  storageBucket: "contextapi-ahthentication.firebasestorage.app",
  messagingSenderId: "67390075547",
  appId: "1:67390075547:web:b9f6fec91f2c7949aa0c3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
