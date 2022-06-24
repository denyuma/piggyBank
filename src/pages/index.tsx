import type { NextPage } from 'next';
import { useState } from 'react';
import Home from '../components/page/Home';
import { AuthProvider } from '../provider/AuthProvider';

const Top: NextPage = () => {
	const [users, setUsers] = useState(null);

	const handleGetUsers = async () => {
		// Client-side request are mocked by `mocks/browser.js`.
		await fetch('/users')
			.then((res) => res.json())
			.then(setUsers);
	};

	console.log(users);

	return (
		<AuthProvider>
			<Home />
		</AuthProvider>
	);
};

export default Top;
