import { onAuthStateChanged, User } from 'firebase/auth';
import { VFC, createContext, useEffect, useState, useContext } from 'react';
import { auth } from '../config/firebase';
import { AuthContextProps, AuthProviderProps } from '../types/authProviderType';

const AuthContext = createContext<AuthContextProps>({ currentUser: null, isAuthenticated: false });

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		let isMounted = true;
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (isMounted) {
				if (user) {
					setCurrentUser(user);
					setIsAuthenticated(true);
				} else {
					setCurrentUser(null);
					setIsAuthenticated(false);
				}
			}
		});
		return () => {
			isMounted = false;
		};
	}, []);

	return <AuthContext.Provider value={{ currentUser, isAuthenticated }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
