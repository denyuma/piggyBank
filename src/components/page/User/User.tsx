import { signOut } from '@firebase/auth';
import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { auth } from '../../../config/firebase';

const User: VFC = () => {
	const router = useRouter();
	const logout = async (): Promise<void> => {
		await signOut(auth);
		router.push('/');
	};

	return (
		<>
			<button onClick={async () => await logout()}>ログアウト</button>
		</>
	);
};

export default User;
