import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Msa_Action from '../../redux-actions/msa';
import Profile_Action from '../../redux-actions/profile';
import ModaleReducer from '../../redux-reducers/index';

// import { Container } from './styles';
interface ModaleProps {
	modalevar: any;
	setmodalevar: any;
}
const Header: React.FC<ModaleProps> = ({ modalevar, setmodalevar }) => {
	const dispatch = useDispatch();
	const handleClick_Profile = () => {
		setmodalevar({ modale: false });
		dispatch(Profile_Action());
	};
	const handleClick_Msa = () => {
		setmodalevar({ modale: false });
		dispatch(Msa_Action());
	};
	let profileContent = useSelector((state: any) => state.ProfileContent);

	return (
		<header id="header" className="header header-footer-style">
			<div className="item-one header-footer-style-item-one">
				<p onClick={handleClick_Msa}>Mansan S. Ahmed</p>
			</div>
			<div className="item-two header-footer-style-item-two"></div>
			<div className="item-three header-footer-style-item-three">
				<p onClick={handleClick_Profile}>Profile</p>
			</div>
		</header>
	);
};

export default Header;
