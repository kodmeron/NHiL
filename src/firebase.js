import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAe5WnwUJjsyQAD5_uHGoDnIp6Z4hHFDTs",

  authDomain: "nhil-4830c.firebaseapp.com",

  databaseURL: "https://nhil-4830c-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "nhil-4830c",

  storageBucket: "nhil-4830c.appspot.com",

  messagingSenderId: "670568431262",

  appId: "1:670568431262:web:d0addf2e1bf41d1e95058f",

  measurementId: "G-QL1SDPJ73Z"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logOut() {
  return signOut(auth)
}

// Custom Hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}






