import React from 'react';

// import { Container } from './styles';
interface ModaleProps {
	modalevar: any;
	setmodalevar: any;
}
const Footer: React.FC<ModaleProps> = ({ modalevar, setmodalevar }) => {
	return (
		<footer className="footer header-footer-style">
			<div className="item-one header-footer-style-item-one">
				<p
					onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void =>
						setmodalevar({ modale: false })
					}
				>
					Contact
				</p>
			</div>
			<div className="item-two header-footer-style-item-two"></div>
			<div className="item-three header-footer-style-item-three">
				<p
					onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void =>
						setmodalevar({
							modale: false,
						})
					}
				>
					Project
				</p>
			</div>
		</footer>
	);
};

export default Footer;
