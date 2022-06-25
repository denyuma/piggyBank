import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	UserCredential,
	AuthError,
} from 'firebase/auth';
import { auth, googleAuthProvider } from '../config/firebase';

type returnValue = {
	hasError: boolean;
	errorContent: Error | null;
};

export const firebaseCreateUser = async (email: string, password: string): Promise<returnValue> => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		await signInWithEmailAndPassword(auth, email, password);

		return { hasError: false, errorContent: null };
	} catch (e) {
		const error = e as AuthError;
		const hasError = true;

		switch (error.code) {
			case 'auth/email-already-in-use':
				return { hasError, errorContent: new Error('このメールアドレスはすでに使われています') };
			default:
				return { hasError, errorContent: new Error('サーバーでエラーが発生しました') };
		}
	}
};

export const emailAuth = async (email: string, password: string): Promise<returnValue> => {
	try {
		await signInWithEmailAndPassword(auth, email, password);

		return { hasError: false, errorContent: null };
	} catch (e) {
		const error = e as AuthError;
		const hasError = true;
		if (error.code === 'auth/user-disabled') {
			return { hasError, errorContent: new Error('無効なユーザーです') };
		} else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
			return { hasError, errorContent: new Error('メールアドレスまたはパスワードが間違っています') };
		} else {
			return { hasError, errorContent: new Error('サーバーでエラーが発生しています') };
		}
	}
};

export const googleAuth = async (): Promise<returnValue> => {
	try {
		await signInWithPopup(auth, googleAuthProvider);

		return { hasError: false, errorContent: null };
	} catch (e) {
		return { hasError: true, errorContent: new Error('サーバーでエラーが発生しています') };
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
