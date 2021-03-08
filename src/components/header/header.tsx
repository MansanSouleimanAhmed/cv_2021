import React, { Fragment, useRef, useEffect, useState } from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
	const [profile, setProfile] = useState(false);
	const [msa, setMsa] = useState(false);
	console.log(profile);
	return (
		<header className="header header-footer-style">
			<div className="item-one header-footer-style-item-one">
				<p onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void => setMsa((msa) => !msa)}>
					Mansan S. Ahmed
				</p>
			</div>
			<div className="item-two header-footer-style-item-two"></div>
			<div className="item-three header-footer-style-item-three">
				<p
					onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void => {
						setProfile((profile) => !profile);
					}}
				>
					Profile
				</p>
			</div>
		</header>
	);
};

export default Header;
