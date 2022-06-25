import { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/dist/client/router';
import { Box, Button, FormControl, TextField, Alert } from '@mui/material';
import Link from 'next/link';
import GoogleIcon from '../../../images/googleIcon.svg';
import { firebaseCreateUser, googleAuth } from '../../../repositories/firebaseAuth';
import { useAuthContext } from '../../../provider/AuthProvider';

type valuesType = {
	email: string;
	password: string;
	confirmPassword: string;
};

const SignUp: VFC = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		trigger,
	} = useForm<valuesType>({
		mode: 'onSubmit',
		reValidateMode: 'onSubmit',
	});
	const { isAuthenticated } = useAuthContext();

	const signUpWithEmail: SubmitHandler<valuesType> = (inputs) => {
		firebaseCreateUser(inputs.email, inputs.password);
		isAuthenticated && router.push('/');
	};

	const signUpWithGoogle = () => {
		googleAuth();
		isAuthenticated && router.push('/');
	};

	return (
		<Box className="flex min-h-screen items-center justify-center bg-pink-100">
			<Box className="max-w-4xl rounded-lg bg-white px-32 py-20 shadow">
				<form onSubmit={handleSubmit(signUpWithEmail)}>
					<FormControl>
						<Box className="mb-8 text-center text-xl font-bold tracking-wider">piggyBankに新規登録する</Box>
						{(errors.email || errors.password || errors.confirmPassword) && (
							<Box className="mb-4">
								{errors.email?.message && <Alert severity="error">{errors.email?.message}</Alert>}
								{errors.password?.message && <Alert severity="error">{errors.password?.message}</Alert>}
								{errors.confirmPassword?.message && <Alert severity="error">{errors.confirmPassword?.message}</Alert>}
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
									minLength: { value: 8, message: 'パスワードは8文字以上で入力してください' },
									onBlur: () => {
										if (getValues('confirmPassword')) {
											trigger('confirmPassword');
										}
									},
								})}
							/>
						</Box>
						<Box className="mb-8 w-96">
							<TextField
								id="confirmPassword"
								type="password"
								label="確認用パスワード"
								variant="outlined"
								fullWidth
								{...register('confirmPassword', {
									required: '確認用パスワードを入力してください',
									validate: (value) => {
										return value === getValues('password') || 'パスワードが一致しません';
									},
								})}
							/>
						</Box>
						<Button type="submit" variant="contained" className="rounded-3xl bg-pink-500 text-lg hover:bg-pink-300">
							新規登録
						</Button>
					</FormControl>
				</form>
				<Box className="my-6 text-center text-lg">または</Box>
				<Button
					variant="outlined"
					className="w-96 rounded-3xl border-gray-900 text-gray-900 hover:border-gray-900 hover:bg-gray-100 "
					onClick={signUpWithGoogle}
				>
					<GoogleIcon alt="googleIcon" height="30" width="30" />
					<Box className="ml-4 text-lg">Googleで登録する</Box>
				</Button>
				<Box className="my-6 text-center  text-blue-500">
					<Link href="/signin">既にアカウントをお持ちの方はこちら</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default SignUp;
