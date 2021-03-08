import React from 'react';
export const MODAL_STYLE: React.CSSProperties = {
	position: 'fixed',
	top: '0%',
	left: '0%',
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0, 0, 0,.6)',
	fontSize: '1.8em',
	zIndex: 3,
};

export const OVERLAY_STYLE: React.CSSProperties = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	height: '70%',
	width: '80%',
	zIndex: 3,
	textAlign: 'center',
	backgroundColor: '#fff',
};
export const RED_CROSS_STYLE: React.CSSProperties = {
	position: 'relative',
	height: '70px',
	width: '70px',
	left: '-2%',
	top: '50%',
	transform: 'translateY(-50%)',
	borderRadius: '50%',
	backgroundColor: 'red',
	zIndex: 4,
	cursor: 'pointer',
};
export const RED_CROSS_ITEM_ONE_STYLE: React.CSSProperties = {
	position: 'absolute',
	top: '70%',
	left: '30%',
	transform: 'rotate(55deg) translate(-40%,-70%)',
	height: '5px',
	width: '50px',
	backgroundColor: '#fff',
	borderRadius: '40%',
};
export const RED_CROSS_ITEM_TWO_STYLE: React.CSSProperties = {
	position: 'absolute',
	top: '50%',
	left: '10%',
	transform: 'rotate(130deg) translate(-10%,-50%)',
	height: '5px',
	width: '50px',
	backgroundColor: '#fff',
	borderRadius: '40%',
};
