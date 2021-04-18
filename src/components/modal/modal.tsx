import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Msa from './modale-content/msa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
	MODAL_STYLE,
	OVERLAY_STYLE,
	RED_CROSS_STYLE,
	RED_CROSS_ITEM_ONE_STYLE,
	RED_CROSS_ITEM_TWO_STYLE,
	MODALE_CONTENT,
} from './style';
import { useDispatch } from 'react-redux';
import False_Action from '../../redux-actions/false';
// import { Container } from './styles';

interface ModaleProps {
	modalevar: { modale: boolean; profile: boolean; msa: boolean; contact: boolean; project: boolean };
	setmodalevar: any;
}
const Modal: React.FC<ModaleProps> = ({ setmodalevar, modalevar }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});
	const dispatch = useDispatch();
	const handleClick = () => {
		setmodalevar({
			modale: true,
			contact: false,
			project: false,
			profile: false,
			msa: false,
		});
		dispatch(False_Action());
	};
	if (modalevar.modale) {
		return null;
	}
	const msa: any = document.getElementById('modal');
	return ReactDom.createPortal(
		<div style={MODAL_STYLE} data-aos={'fade'}>
			<div style={OVERLAY_STYLE}>
				<div style={MODALE_CONTENT}>
					<Msa setmodalevar={setmodalevar} modalevar={modalevar} />
				</div>
				<div style={RED_CROSS_STYLE} onClick={handleClick}>
					<div style={RED_CROSS_ITEM_ONE_STYLE}></div>
					<div style={RED_CROSS_ITEM_TWO_STYLE}></div>
				</div>
			</div>
		</div>,
		msa
	);
};

export default Modal;
