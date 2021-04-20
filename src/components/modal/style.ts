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
	height: '60px',
	width: '60px',
	left: '-7%',
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
	height: '4px',
	width: '40px',
	backgroundColor: '#fff',
	borderRadius: '40%',
};
export const RED_CROSS_ITEM_TWO_STYLE: React.CSSProperties = {
	position: 'absolute',
	top: '50%',
	left: '10%',
	transform: 'rotate(130deg) translate(-10%,-50%)',
	height: '4px',
	width: '40px',
	backgroundColor: '#fff',
	borderRadius: '40%',
};
export const MODALE_CONTENT: React.CSSProperties = {
	position: 'absolute',
	overflow: 'scroll',
	height: '100%',
	width: '80%',
	left: '10%',
};

export const CV_BUTTON_STYLE: React.CSSProperties = {
	display: 'block',
	position: 'relative',
	borderRadius: '8%',
	height: '55px',
	width: '80px',
	textAlign: 'center',
	left: '50%',
	transform: 'translate(-50%)',
	marginBottom: '50px',
	cursor: 'pointer',
	outline: 'inherit',
	border: 'none',
	marginTop: '50px',
	fontSize: '16px',
	background: 'rgb(245, 210, 9)',
	boxShadow: ' inset 0px 0px  10px 0px rgb(15, 0, 9)',
};
export const PROJECT_CONTAINER_STYLE: React.CSSProperties = {
	position: 'relative',

	left: '50%',
	transform: 'translate(-50%)',
	margin: '40px 0px 50px 0px',
	height: '230px',
	width: '250px',
	boxShadow: '-2px -1px 52px 10px rgba(0,0,0,0.83)',
};
export const IMG_STYLE: React.CSSProperties = {
	height: '230px',
	width: '250px',
};
export const P_STYLE: React.CSSProperties = {
	paddingTop: '20px',
	lineHeight: '30px',
	paddingBottom: '30px',
};

export const PROJ_BUTTON_STYLE: React.CSSProperties = {
	position: 'absolute',
	borderRadius: '50%',
	height: '70px',
	width: '70px',
	textAlign: 'center',
	top: '64%',
	left: '40%',
	cursor: 'pointer',
	outline: 'inherit',
	border: 'none',
	fontSize: '17px',
	color: '#fff',
	background: 'rgb(10, 152, 5)',
	boxShadow: ' inset 0px 0px  15px 0px rgb(0, 12, 5)',
};
export const WEB_BUTTON_STYLE: React.CSSProperties = {
	position: 'absolute',
	borderRadius: '8%',
	height: '55px',
	width: '80px',
	textAlign: 'center',
	top: '4%',
	left: '5%',
	cursor: 'pointer',
	outline: 'inherit',
	border: 'none',
	fontSize: '16px',
	background: 'rgb(70, 188, 305)',
	boxShadow: ' inset 0px 0px  10px 0px  rgb(12, 20, 7)',
};
