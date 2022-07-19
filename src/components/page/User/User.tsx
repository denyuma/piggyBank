import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { firebaseSignOut } from '../../../repositories/firebaseAuth';
import Layout from '../../ui/Layout';

const User: VFC = () => {
	const router = useRouter();
	const logout = async (): Promise<void> => {
		await firebaseSignOut();
		router.push('/');
	};

	return (
		<>
			<Layout />
			<button onClick={async () => await logout()}>ログアウト</button>
		</>
	);
};

export default User;
