import { User } from 'firebase/auth';
import { VFC, createContext, useEffect, useState, useContext } from 'react';
import { auth } from '../config/firebase';
import { AuthContextProps, AuthProviderProps } from '../types/authProviderType';

const AuthContext = createContext<AuthContextProps>({ currentUser: null });

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		let isMounted = true;
		auth.onAuthStateChanged((user) => {
			console.log(user);
			if (isMounted) setCurrentUser(user);
		});
		return () => {
			isMounted = false;
		};
	}, []);

	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
