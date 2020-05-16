import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvqdoCKW5XL4e4r9cK9IV01B_W4tdAxAY",
  authDomain: "hoh-db.firebaseapp.com",
  databaseURL: "https://hoh-db.firebaseio.com",
  projectId: "hoh-db",
  storageBucket: "hoh-db.appspot.com",
  messagingSenderId: "604739400659",
  appId: "1:604739400659:web:b04c60a6ff7223e501b526",
  measurementId: "G-YD3RVBVPJT",
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShop = await userRef.get();

    if(!snapShop.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            })
        } catch(error) {
            console.log('error creating user',error.message)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
