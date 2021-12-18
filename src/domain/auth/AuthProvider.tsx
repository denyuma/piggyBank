import { User, signOut } from 'firebase/auth';
import { VFC, createContext, useEffect, useState, useContext } from 'react';
import { auth } from '../../config/firebase';
import { AuthContextProps, AuthProviderProps } from './types';

const AuthContext = createContext<AuthContextProps>({ currentUser: null, logout: () => null });

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

	const logout = async (): Promise<void> => {
		await signOut(auth);
	};

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
	}, []);

	return <AuthContext.Provider value={{ currentUser, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
