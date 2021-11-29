import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5rQEmy7zNk3Fmq166aSU_NXOLwTJ-8o",
  authDomain: "shoutouts-5a971.firebaseapp.com",
  projectId: "shoutouts-5a971",
  storageBucket: "shoutouts-5a971.appspot.com",
  messagingSenderId: "903702017423",
  appId: "1:903702017423:web:3dbfb8810a6f442cd607fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
