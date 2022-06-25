import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../config/firebase';

export const firebaseCreateUser = async (email: string, password: string) => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}
	}
};

export const emailAuth = async (email: string, password: string) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}
	}
};

export const googleAuth = async () => {
	try {
		await signInWithPopup(auth, googleAuthProvider);
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}
	}
};
