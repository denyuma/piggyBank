import { VFC } from 'react';
import Box from '@mui/material/Box';
import { useAuthContext } from '../../domain/auth/AuthProvider';
import { useRouter } from 'next/dist/client/router';
import endPointUrl from '../../../config/apiconfig';
import Header from '../../ui/Home/Header';
import Title from '../../ui/Home/Title';
import Features from '../../ui/Home/Features';
import Footer from '../../ui/Home/Footer';
import styles from '../../../styles/Home.module.css';

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
};

export default Home;
