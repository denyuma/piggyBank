import Link from 'next/link';
import { VFC } from 'react';
import { Button } from '@mui/material';
import { useAuthContext } from '../../domain/auth/AuthProvider';
import { useRouter } from 'next/dist/client/router';
import endPointUrl from '../../../config/apiconfig';

const Home: VFC = () => {
	const { currentUser } = useAuthContext();
	const router = useRouter();

	console.log('endpointurl', endPointUrl);

	console.log('currentUser', currentUser);
	if (currentUser) {
		router.push(`/user/${currentUser.uid}`);
	}

	return (
		<>
			<Link href="/signup" passHref>
				<Button>新規登録</Button>
			</Link>
			<Link href="/signin" passHref>
				<Button>ログイン</Button>
			</Link>
		</>
	);
};

export default Home;
