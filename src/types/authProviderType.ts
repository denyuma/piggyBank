import { User } from 'firebase/auth';
import { ReactNode } from 'react';

export type AuthContextProps = {
	currentUser: User | null | undefined;
	isAuthenticated: boolean;
	isLoading: boolean;
};

export type AuthProviderProps = {
	children: ReactNode;
};
