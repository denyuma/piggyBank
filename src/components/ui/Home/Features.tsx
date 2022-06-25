import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { VFC } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import feature1Image from '../../../images/feature_1.png';
import feature2Image from '../../../images/feature_2.png';
import feature3Image from '../../../images/feature_3.png';
import Link from 'next/link';

const Features: VFC = () => {
	return (
		<Box className="mx-auto w-[50vw]">
			<Box className="flex flex-col items-center">
				<Box className="my-16 flex ">
					<Image src={feature1Image} alt="機能1" width="340" height="300" />
					<Box className="my-12 ml-10">
						<Box className="text-2xl font-bold">
							お財布や銀行などの残高を <br />
							まとめて見える化
						</Box>
						<Box className="mt-10">
							生活用や貯金用、いくつもある銀行口座の残高 <br />
							などあなたの資産をまとめて確認できます。
						</Box>
					</Box>
				</Box>
				<Box className="my-16 flex">
					<Box className="my-12 ml-10">
						<Box className="text-2xl font-bold">
							今月何にいくら <br />
							使ったかを見える化
						</Box>
						<Box className="mt-10">
							毎日の支出を、食費や日用品などに分類。 <br />
							何にお金を使っているのか、簡単に確認できます。
						</Box>
					</Box>
					<Image src={feature2Image} alt="機能2" width="340" height="300" />
				</Box>
				<Box className="my-16 flex">
					<Image src={feature3Image} alt="機能3" width="340" height="300" />
					<Box className="my-12 ml-10">
						<Box className="text-2xl font-bold">家計の改善</Box>
						<Box className="mt-10">
							見える化だけではなく、家計の改善をサポートします。 <br />
							予算管理で今月使えるお金をチェック。
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="mb-16 text-center">
				<Link href="/signup" passHref>
					<Button variant="contained" className="mx-4 mt-10 rounded-full bg-pink-700 text-2xl hover:bg-pink-500 ">
						<ArrowCircleRightIcon className="ml-4" />
						<Box className="mx-4">Webで今すぐではじめる</Box>
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Features;
