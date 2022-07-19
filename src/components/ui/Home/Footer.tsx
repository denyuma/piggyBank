import { VFC } from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: VFC = () => {
	return (
		<Box className="bg-gray-300 py-16 text-center">
			<Box className="text-xl">
				Illustrations by
				<Link href="https://www.humaaans.com/">
					<a target="_blank" rel="noopener noreferrer" className="ml-2 text-sky-600">
						humaaans
					</a>
				</Link>
			</Box>
			<Box className="my-4 text-lg">©2022 piggyBank</Box>
			<Link href="https://github.com/denyuma/piggyBank" passHref>
				<a target="_blank" rel="noopener noreferrer">
					<Button variant="contained" className="rounded-full bg-gray-800 text-lg normal-case hover:bg-gray-600">
						<GitHubIcon className="mr-4" />
						Github
					</Button>
				</a>
			</Link>
		</Box>
	);
};

export default Footer;
