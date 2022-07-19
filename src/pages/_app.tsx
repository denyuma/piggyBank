import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../provider/AuthProvider';
import { Box } from '@mui/material';

if (process.env.ENDPOINT === 'msw') {
	require('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
