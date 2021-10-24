import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => (
	<header>
		<nav>
			<Link style={{ color: 'white', margin: '10px' }} to="/">
				Controlled Inputs
			</Link>
			<Link style={{ color: 'white', margin: '10px' }} to="/users">
				Users API
			</Link>
		</nav>
	</header>
);

export default Header;
