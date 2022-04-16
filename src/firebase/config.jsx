import firebase from "firebase/app"
import "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = firebase.initializeApp({
   apiKey: "AIzaSyB9n_QXpkL0Ymwf2WOD13Oo8VkPNENoHfA",
   authDomain: "netflixclone-229c4.firebaseapp.com",
   projectId: "netflixclone-229c4",
   storageBucket: "netflixclone-229c4.appspot.com",
   messagingSenderId: "999365459917",
   appId: "1:999365459917:web:3dc8676a8cc20102284e84",
   measurementId: "G-YQV3MG681F"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;