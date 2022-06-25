import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	UserCredential,
} from 'firebase/auth';
import { auth, googleAuthProvider } from '../config/firebase';

export const firebaseCreateUser = async (email: string, password: string): Promise<string | null> => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);

		return userCredential.user.uid;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}

		return null;
	}
};

export const emailAuth = async (email: string, password: string): Promise<string | null> => {
	try {
		const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);

		return userCredential.user.uid;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}

		return null;
	}
};

export const googleAuth = async (): Promise<string | null> => {
	try {
		const userCredential: UserCredential = await signInWithPopup(auth, googleAuthProvider);

		return userCredential.user.uid;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}

		return null;
	}
};

export const firebaseSignOut = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}
	}
};
