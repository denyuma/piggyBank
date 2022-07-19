import { ReactNode, VFC } from 'react';
import NavigationBar from '../NavigationBar';

interface Props {
	children?: ReactNode;
}

const Layout: VFC<Props> = ({ children }) => {
	return (
		<>
			<NavigationBar />
			{children}
		</>
	);
};

export default Layout;
