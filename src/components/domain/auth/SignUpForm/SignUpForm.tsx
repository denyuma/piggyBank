import { VFC, useState, FormEvent, ChangeEvent } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../config/firebase';
import { useRouter } from 'next/dist/client/router';

const SignUp: VFC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const router = useRouter();

	const createUser = async (e: FormEvent) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await signInWithEmailAndPassword(auth, email, password);
			router.push('/');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};

	return (
		<div className="wrapper">
			<form className="auth" onSubmit={(e: FormEvent) => createUser(e)}>
				<div>
					<label htmlFor="email" className="auth-label">
						Email:{' '}
					</label>
					<input
						id="email"
						className="auth-input"
						type="email"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mt-2">
					<label htmlFor="password" className="auth-label">
						Password:{' '}
					</label>
					<input
						id="password"
						className="auth-input"
						type="password"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
					/>
				</div>
				<button className="auth-btn" type="submit">
					SignUp
				</button>
			</form>
		</div>
	);
};

export default SignUp;
