
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2qOPX-EUQi7DDr_lwV5zQhKKSb096Gxc",
  authDomain: "invoice-app-62488.firebaseapp.com",
  projectId: "invoice-app-62488",
  storageBucket: "invoice-app-62488.firebasestorage.app",
  messagingSenderId: "921563401381",
  appId: "1:921563401381:web:01d24aa33e12bd9014d14c",
  measurementId: "G-6B84KLFE33"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
