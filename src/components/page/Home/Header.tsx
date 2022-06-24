import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { VFC } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import FaceIcon from '@mui/icons-material/Face';

const Header: VFC = () => {
	return (
		<>
			<Box className="mx-auto  w-90v ">
				<Box className="flex items-center justify-end">
					<Box className="m-3">
						<Link href="/signup" passHref>
							<Button variant="contained" className="rounded-full bg-pink-700 hover:bg-pink-500">
								<Box className="text-lg">新規登録</Box>
								<FaceIcon className="mx-2" />
							</Button>
						</Link>
					</Box>
					<Box className="m-6">
						<Link href="/signin" passHref>
							<Button variant="contained" className="rounded-full bg-pink-700 hover:bg-pink-500">
								<Box className="text-lg">ログイン</Box>
								<LoginIcon className="mx-2" />
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Header;
