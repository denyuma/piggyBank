import { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/dist/client/router';
import { Alert, Box, Button, FormControl, TextField } from '@mui/material';
import GoogleIcon from '../../../images/googleIcon.svg';
import Link from 'next/link';
import { emailAuth, googleAuth } from '../../../repositories/firebaseAuth';

type valuesType = {
	email: string;
	password: string;
};

const SignInForm: VFC = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<valuesType>({
		mode: 'onSubmit',
		reValidateMode: 'onSubmit',
	});

	const signInWithEmail: SubmitHandler<valuesType> = async (inputs) => {
		const uid = await emailAuth(inputs.email, inputs.password);
		if (uid) router.push('/');
	};

	const signInWithGoogle = async () => {
		const uid = await googleAuth();
		if (uid) router.push('/');
	};

	return (
		<Box className="flex min-h-screen items-center justify-center bg-pink-100">
			<Box className="max-w-4xl rounded-lg bg-white px-32 py-20 shadow">
				<form onSubmit={handleSubmit(signInWithEmail)}>
					<FormControl>
						<Box className="mb-8 text-center text-xl font-bold tracking-wider">piggyBankにログインする</Box>
						{(errors.email || errors.password) && (
							<Box className="mb-4">
								{errors.email?.message && <Alert severity="error">{errors.email?.message}</Alert>}
								{errors.password?.message && <Alert severity="error">{errors.password?.message}</Alert>}
							</Box>
						)}
						<Box className="mb-8 w-96">
							<TextField
								id="email"
								type="email"
								label="メールアドレス"
								variant="outlined"
								fullWidth
								{...register('email', {
									required: 'メールアドレスを入力してください',
									pattern: {
										value:
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: '入力形式がメールアドレスではありません',
									},
								})}
							/>
						</Box>
						<Box className="mb-8 w-96">
							<TextField
								id="password"
								type="password"
								label="パスワード"
								variant="outlined"
								fullWidth
								{...register('password', {
									required: 'パスワードを入力してください',
								})}
							/>
						</Box>
						<Button type="submit" variant="contained" className="rounded-3xl bg-pink-500 text-lg hover:bg-pink-300">
							ログイン
						</Button>
					</FormControl>
				</form>
				<Box className="my-6 text-center text-lg">または</Box>
				<Box className="">
					<Button
						variant="outlined"
						className="w-96 rounded-3xl border-gray-900 text-gray-900 hover:border-gray-900 hover:bg-gray-100 "
						onClick={signInWithGoogle}
					>
						<GoogleIcon alt="googleIcon" height="30" width="30" />
						<Box className="ml-4 text-lg">Googleでログインする</Box>
					</Button>
				</Box>
				<Box className="my-6 text-center  text-blue-500">
					<Link href="/signup">まだアカウントを持っていない方はこちら</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default SignInForm;
