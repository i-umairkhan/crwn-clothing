import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKyvhVNe3UjGFUaBrqrMn07c6aK17MMjc",
  authDomain: "crwn-clothing-eb5b6.firebaseapp.com",
  projectId: "crwn-clothing-eb5b6",
  storageBucket: "crwn-clothing-eb5b6.appspot.com",
  messagingSenderId: "649979308618",
  appId: "1:649979308618:web:abe2551c33a561f58914b3",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const craetedAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        craetedAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};
