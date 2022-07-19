import { VFC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Button } from '@mui/material';
import piggyImage from '../../../images/piggy.png';
import savingMoneyImage from '../../../images/savingMoney.png';

const Title: VFC = () => {
	return (
		<Box className="mx-auto my-40 flex w-[80vw]">
			<Box className="ml-8 flex  flex-col items-start justify-around">
				<Box className="flex">
					<Image src={piggyImage} alt="piggyImage" height={150} width={150} />
					<h1 className="mt-12 ml-6 text-6xl ">piggyBank</h1>
				</Box>
				<Box className="mt-6 text-4xl font-semibold tracking-widest">
					家計簿も資産管理も
					<br />
					これ一つで管理する
				</Box>
				<Link href="/signup" passHref>
					<Button variant="contained" className="mx-4 mt-10 rounded-full bg-pink-700 text-xl hover:bg-pink-500 ">
						<ArrowCircleRightIcon className="ml-4" />
						<Box className="mx-4">Webで今すぐではじめる</Box>
					</Button>
				</Link>
			</Box>
			<Box className="ml-24  w-[50vw]">
				<Image src={savingMoneyImage} alt="savingMoneyImage" />
			</Box>
		</Box>
	);
};

export default Title;
