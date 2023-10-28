// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEAEZYhfxSNXlclpmRjo8IFIp4r4axb2A",
  authDomain: "fir-auth-yt-1d137.firebaseapp.com",
  projectId: "fir-auth-yt-1d137",
  storageBucket: "fir-auth-yt-1d137.appspot.com",
  messagingSenderId: "523041379111",
  appId: "1:523041379111:web:674c57ed1d76e6ba6dcf02"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app
