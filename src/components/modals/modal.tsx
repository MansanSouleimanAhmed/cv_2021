import React from 'react';
import ReactDom from 'react-dom';
import {
	MODAL_STYLE,
	OVERLAY_STYLE,
	RED_CROSS_STYLE,
	RED_CROSS_ITEM_ONE_STYLE,
	RED_CROSS_ITEM_TWO_STYLE,
} from './style';
// import { Container } from './styles';

interface ModaleProps {
	modalevar: any;
	setmodalevar: any;
}
const Modal: React.FC<ModaleProps> = ({ setmodalevar, modalevar }) => {
	if (modalevar.modale) {
		return null;
	}
	//console.log(props.modalevar.modale);

	const msa: any = document.getElementById('modal');

	return ReactDom.createPortal(
		<div style={MODAL_STYLE}>
			<div style={OVERLAY_STYLE}>
				<div
					style={RED_CROSS_STYLE}
					onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => setmodalevar({ modale: true })}
				>
					<div style={RED_CROSS_ITEM_ONE_STYLE}></div>
					<div style={RED_CROSS_ITEM_TWO_STYLE}></div>
				</div>
			</div>
		</div>,
		msa
	);
};

export default Modal;
