import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM6ZOnMu2ruA_RZFuYeXf6Bu8oWg50E28",
  authDomain: "alta-car-rentals.firebaseapp.com",
  projectId: "alta-car-rentals",
  storageBucket: "alta-car-rentals.firebasestorage.app",
  messagingSenderId: "1020491912804",
  appId: "1:1020491912804:web:b289561f979123ceff3171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth