 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYQmfARFDmAYGCIUT1k81qiFV0CZr90iI",
  authDomain: "netflixgpt-7eafe.firebaseapp.com",
  projectId: "netflixgpt-7eafe",
  storageBucket: "netflixgpt-7eafe.appspot.com",
  messagingSenderId: "5609844606",
  appId: "1:5609844606:web:025e4b251a94f3e3b74d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();