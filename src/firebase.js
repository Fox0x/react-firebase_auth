import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAMuXARCx_AWUki3JDPSPu4_8yvK_hUyuM",
	authDomain: "test-auth-66af2.firebaseapp.com",
	projectId: "test-auth-66af2",
	storageBucket: "test-auth-66af2.appspot.com",
	messagingSenderId: "392691216732",
	appId: "1:392691216732:web:1e3b671b1d195ce99a5199",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};
