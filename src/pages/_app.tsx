import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '../provider/AuthProvider';

if (process.env.ENDPOINT === 'msw') {
	require('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Head>
				<title>piggyBank</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
