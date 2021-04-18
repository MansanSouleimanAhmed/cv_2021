import React from 'react';
import { useDispatch } from 'react-redux';
import Contact_Action from '../../redux-actions/contact';
import Project_Action from '../../redux-actions/project';

// import { Container } from './styles';
interface ModaleProps {
	modalevar: any;
	setmodalevar: any;
}
const Footer: React.FC<ModaleProps> = ({ modalevar, setmodalevar }) => {
	const dispatch = useDispatch();
	const handleClick_Project = () => {
		setmodalevar({
			modale: false,
		});
		dispatch(Project_Action());
	};
	const handleClick_Contact = () => {
		setmodalevar({
			modale: false,
		});
		dispatch(Contact_Action());
	};
	return (
		<footer className="footer header-footer-style">
			<div className="item-one header-footer-style-item-one">
				<p onClick={handleClick_Contact}>Contact</p>
			</div>
			<div className="item-two header-footer-style-item-two"></div>
			<div className="item-three header-footer-style-item-three">
				<p onClick={handleClick_Project}>Project</p>
			</div>
		</footer>
	);
};

export default Footer;
