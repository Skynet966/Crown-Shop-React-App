import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaM_ZmEjZFbRyo6JSOSkZSkpH_sYO2xGI",
    authDomain: "crown-shop-d7f57.firebaseapp.com",
    databaseURL: "https://crown-shop-d7f57.firebaseio.com",
    projectId: "crown-shop-d7f57",
    storageBucket: "crown-shop-d7f57.appspot.com",
    messagingSenderId: "188439449644",
    appId: "1:188439449644:web:2f3a39907765521c250189",
    measurementId: "G-GV890LNWMN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;