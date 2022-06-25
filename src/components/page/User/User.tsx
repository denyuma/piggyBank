import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { firebaseSignOut } from '../../../repositories/firebaseAuth';

const User: VFC = () => {
	const router = useRouter();
	const logout = async (): Promise<void> => {
		await firebaseSignOut();
		router.push('/');
	};

	return (
		<>
			<button onClick={async () => await logout()}>ログアウト</button>
		</>
	);
};

export default User;
