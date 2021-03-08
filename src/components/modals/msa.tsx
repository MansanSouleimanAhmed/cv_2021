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

const Msa: React.FC = () => {
	const msa: any = document.getElementById('msa');
	return ReactDom.createPortal(
		<div style={MODAL_STYLE}>
			<div style={OVERLAY_STYLE}>
				<div style={RED_CROSS_STYLE}>
					<div style={RED_CROSS_ITEM_ONE_STYLE}></div>
					<div style={RED_CROSS_ITEM_TWO_STYLE}></div>
				</div>
			</div>
		</div>,
		msa
	);
};

export default Msa;
