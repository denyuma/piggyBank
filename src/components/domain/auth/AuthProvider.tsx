import { User, getAuth } from 'firebase/auth';
import { VFC, createContext, useEffect, useState } from 'react';
import { AuthContextProps, AuthProviderProps } from './types';

const auth = getAuth();

const AuthContext = createContext<AuthContextProps>({ currentUser: null });

const AuthProvider: VFC<AuthProviderProps> = (children) => {
	const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
	}, []);

	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
