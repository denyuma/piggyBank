import { onAuthStateChanged, User } from 'firebase/auth';
import { VFC, createContext, useEffect, useState, useContext } from 'react';
import { auth } from '../config/firebase';
import { AuthContextProps, AuthProviderProps } from '../types/authProviderType';

const AuthContext = createContext<AuthContextProps>({ currentUser: null, isAuthenticated: false, isLoading: false });

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		let isMounted = true;
		onAuthStateChanged(auth, (user) => {
			if (isMounted) {
				if (user) {
					setCurrentUser(user);
					setIsAuthenticated(true);
					setIsLoading(false);
				} else {
					setCurrentUser(null);
					setIsAuthenticated(false);
					setIsLoading(false);
				}
			}
		});

		return () => {
			isMounted = false;
		};
	}, []);

	console.log('isLoadinggggggg', isLoading);

	return (
		<AuthContext.Provider value={{ currentUser, isAuthenticated, isLoading }}>
			{!isLoading && children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
