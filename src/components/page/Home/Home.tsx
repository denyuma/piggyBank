import { VFC } from 'react';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import { useAuthContext } from '../../../provider/AuthProvider';
import { useRouter } from 'next/dist/client/router';
import endPointUrl from '../../../config/apiconfig';
import Header from '../../ui/Home/Header';
import Title from '../../ui/Home/Title';
import Features from '../../ui/Home/Features';
import Footer from '../../ui/Home/Footer';
import styles from '../../../styles/Home.module.css';

const Home: VFC = () => {
	const { currentUser, isLoading } = useAuthContext();
	const router = useRouter();

	console.log('endPoint', endPointUrl);

	console.log('currentUser', currentUser);
	if (currentUser) {
		router.push(`/user/${currentUser.uid}`);
	}

	console.log('isLoading', isLoading);

	if (!isLoading) {
		return (
			<Box className="text-center">
				<ReactLoading type="spin" color="#FFC9D2" height="100px" width="100px" className="mx-auto my-10" />
				読み込み中です。しばらくお待ちください
			</Box>
		);
	} else {
		return (
			<>
				<Box className={styles.bgHero}>
					<Box className="mb-16 min-h-screen">
						<Header />
						<Title />
					</Box>
				</Box>
				<Features />
				<Footer />
			</>
		);
	}
};

export default Home;
