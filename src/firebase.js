import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	fetchSignInMethodsForEmail,
	signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const userExist = (email) => {
	return fetchSignInMethodsForEmail(auth, email);
};

export const signin = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const signup = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};
