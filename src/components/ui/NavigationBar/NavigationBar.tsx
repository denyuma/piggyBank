import { ReactNode, VFC } from 'react';
import Image from 'next/image';
import mainIcon from '../../../images/mainIcon.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../provider/AuthProvider';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import FolderIcon from '@mui/icons-material/Folder';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

type ListType = {
	name: string;
	href: string;
};

const NavigationBar: VFC = () => {
	const { currentUser } = useAuthContext();
	const router = useRouter();
	const navigationList: Array<ListType> = [
		{ name: 'ホーム', href: '' },
		{ name: 'カレンダー', href: 'calendar' },
		{ name: '予算', href: 'budget' },
		{ name: '資産', href: 'assets' },
		{ name: '口座', href: 'accounts' },
	];
	const pathname = ['calendar', 'budget', 'assets', 'accounts'].includes(router.asPath.split('/').slice(-1)[0])
		? router.asPath.split('/').slice(-1)[0]
		: '';

	const selectIcon = (name: string, now?: boolean): ReactNode => {
		switch (name) {
			case 'ホーム':
				return now ? (
					<Box className="text-pink-500">
						<HomeIcon />
					</Box>
				) : (
					<HomeIcon />
				);
			case 'カレンダー':
				return now ? (
					<Box className="text-pink-500">
						<CalendarMonthIcon />
					</Box>
				) : (
					<CalendarMonthIcon />
				);
			case '予算':
				return now ? (
					<Box className="text-pink-500">
						<BarChartIcon />
					</Box>
				) : (
					<BarChartIcon />
				);
			case '資産':
				return now ? (
					<Box className="text-pink-500">
						<FolderIcon />
					</Box>
				) : (
					<FolderIcon />
				);
			case '口座':
				return now ? (
					<Box className="text-pink-500">
						<LocalAtmIcon />
					</Box>
				) : (
					<LocalAtmIcon />
				);
		}
	};

	return (
		<Box className="flex justify-center border-b-2 border-gray-300">
			<Box className=" flex  w-[1200px]  ">
				<Link href={`/user/${currentUser?.uid}`} passHref>
					<Box className="pt-4">
						<Image src={mainIcon} alt="mainIcon" className="hover:cursor-pointer" />
					</Box>
				</Link>
				<Box className="mt-4 flex justify-center">
					{navigationList.map(({ name, href }: ListType) => {
						console.log('pathname', pathname);
						console.log('href', href);
						return (
							<Link href={`/user/${currentUser?.uid}/${href}`} passHref key={name}>
								{pathname === href ? (
									<Box className="flex w-32 justify-center  border-b-4 border-pink-500  py-4 hover:cursor-pointer">
										{selectIcon(name, pathname === href)}
										<Box className="text-pink-500">{name}</Box>
									</Box>
								) : (
									<Box className="flex w-32 justify-center  py-4 hover:cursor-pointer">
										{selectIcon(name)}
										<Box>{name}</Box>
									</Box>
								)}
							</Link>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default NavigationBar;
