import { User } from '@firebase/auth';
import { ReactNode } from 'react';

export type AuthContextProps = {
	currentUser: User | null | undefined;
	logout: () => void;
};

export type AuthProviderProps = {
	children: ReactNode;
};
