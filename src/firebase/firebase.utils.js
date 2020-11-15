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

firebase.initializeApp(config);  //configure the firebase

export const createUserProfileDocument = async (userAuth, additionalData) =>
{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);

    const snapShot = await userRef.get();

    if (!snapShot.exists)
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try
        {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error)
        {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;