import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendEmailVerification
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import {
  getToken,
  initializeAppCheck,
  ReCaptchaV3Provider,
} from "firebase/app-check";

import { actionCodeSettings } from "./Components/ActionCodeSettings";

const firebaseConfig = {
  apiKey: "AIzaSyAe5WnwUJjsyQAD5_uHGoDnIp6Z4hHFDTs",

  authDomain: "nhil-4830c.firebaseapp.com",

  databaseURL:
    "https://nhil-4830c-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "nhil-4830c",

  storageBucket: "nhil-4830c.appspot.com",

  messagingSenderId: "670568431262",

  appId: "1:670568431262:web:d0addf2e1bf41d1e95058f",

  measurementId: "G-QL1SDPJ73Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LfU8xwiAAAAAKRsET5Ziv4vRnINl4sYnEVnE2N3"),
});

// firebase emulator!
//connectAuthEmulator(auth, "http://localhost:9099");

export const db = getFirestore(app);

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}



export function sendEmail(email) {
  if (isSignInWithEmailLink(auth, window.location.href)) {
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
        email = window.prompt('Please provide your email for confirmation');
  }
}
  console.log(email)
  return sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
    window.localStorage.setItem('emailForSignIn', email);
  })
}

// Custom Hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
