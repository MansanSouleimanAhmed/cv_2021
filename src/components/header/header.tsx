import React, { Fragment } from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<header className="header header-footer-style">
			<div className="item-one header-footer-style-item-one">
				<p>Mansan S. Ahmed</p>
			</div>
			<div className="item-two header-footer-style-item-two"></div>
			<div className="item-three header-footer-style-item-three">
				<p>Profile</p>
			</div>
		</header>
	);
};

export default Header;
