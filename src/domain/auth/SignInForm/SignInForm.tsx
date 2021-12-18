import { VFC, useState, FormEvent, ChangeEvent } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../config/firebase';
import { useRouter } from 'next/dist/client/router';

const SignInForm: VFC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const router = useRouter();

	const emailLogin = async (e: FormEvent) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			router.push('/');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};

	const googleLogin = async () => {
		try {
			await signInWithPopup(auth, provider);
			router.push('/');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};

	return (
		<div className="wrapper">
			<form className="auth" onSubmit={(e: FormEvent) => emailLogin(e)}>
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
					ログイン
				</button>
			</form>
			<button onClick={googleLogin}>Googleアカウントでログイン</button>
		</div>
	);
};

export default SignInForm;
