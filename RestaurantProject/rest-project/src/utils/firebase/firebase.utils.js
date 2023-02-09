import { initializeApp } from "firebase/app"
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from "firebase/auth"
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2QUvs56qo9NPV2uz__7TWvJWqpqIPK8A",
  authDomain: "rest-project-db.firebaseapp.com",
  projectId: "rest-project-db",
  storageBucket: "rest-project-db.appspot.com",
  messagingSenderId: "282970678573",
  appId: "1:282970678573:web:06763292a637a7a236dfa4"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth =  async(userAuth, additinalInformation={}) => {
  if(!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createAt = new Date();
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
          ...additinalInformation
        })
      } catch (error) {
        console.log("error creating the user", error.message);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  };
