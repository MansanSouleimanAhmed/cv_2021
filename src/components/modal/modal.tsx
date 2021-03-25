import React from 'react';
import ReactDom from 'react-dom';
import Msa from './modale-content/msa';
import {
	MODAL_STYLE,
	OVERLAY_STYLE,
	RED_CROSS_STYLE,
	RED_CROSS_ITEM_ONE_STYLE,
	RED_CROSS_ITEM_TWO_STYLE,
	MODALE_CONTENT,
} from './style';
// import { Container } from './styles';

interface ModaleProps {
	modalevar: { modale: boolean; profile: boolean; msa: boolean; contact: boolean; project: boolean };
	setmodalevar: any;
}
const Modal: React.FC<ModaleProps> = ({ setmodalevar, modalevar }) => {
	console.log('modale ' + modalevar);
	if (modalevar.modale) {
		return null;
	}
	//console.log(props.modalevar.modale);

	const msa: any = document.getElementById('modal');

	return ReactDom.createPortal(
		<div style={MODAL_STYLE}>
			<div style={OVERLAY_STYLE}>
				<div style={MODALE_CONTENT}>
					<Msa setmodalevar={setmodalevar} modalevar={modalevar} />
				</div>
				<div
					style={RED_CROSS_STYLE}
					onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void =>
						setmodalevar({ modale: true, contact: false, project: false, profile: false, msa: false })
					}
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
