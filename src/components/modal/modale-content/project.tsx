import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { IMG_STYLE, PROJECT_CONTAINER_STYLE, PROJ_BUTTON_STYLE, WEB_BUTTON_STYLE } from '../style';
import CV from '../../../images/cv-image.png';
import GameRPS from '../../../images/game-rps.jpg';
import Hubble from '../../../images/huddle.jpg';
import Creatif from '../../../images/creatif.png';

// import { Container } from './styles';

const Profile: React.FC = () => {
	let projectContent: any = useSelector((state: any) => state.ProjectContent);
	let style = {};
	let styleFunction: any = () => {
		if (projectContent == false) {
			return (style = { display: 'none' });
		}
	};
	styleFunction();
	return (
		<Fragment>
			<div style={style}>
				<div style={PROJECT_CONTAINER_STYLE}>
					<img src={CV} style={IMG_STYLE} />
					<a href={'https://github.com/ms-ahmed/cv_2021'} target={'_blank'}>
						<button style={PROJ_BUTTON_STYLE}>{'Github'}</button>
					</a>
				</div>
				<br />
				<br />
				<div style={PROJECT_CONTAINER_STYLE}>
					<img src={GameRPS} style={IMG_STYLE} />
					<a href={'https://rock-paper-scissors-x17.netlify.app/'} target={'_blank'}>
						<button style={WEB_BUTTON_STYLE}>{'Website'}</button>
					</a>
					<a href={'https://github.com/ms-ahmed/rock-paper-scissors-master'} target={'_blank'}>
						<button style={PROJ_BUTTON_STYLE}>{'Github'}</button>
					</a>
				</div>
				<br />
				<br />
				<div style={PROJECT_CONTAINER_STYLE}>
					<img src={Creatif} style={IMG_STYLE} />
					<a href={'https://creatif-simple-project.netlify.app/'} target={'_blank'}>
						<button style={WEB_BUTTON_STYLE}>{'Website'}</button>
					</a>

					<a href={'https://github.com/ms-ahmed/creative-single-page'} target={'_blank'}>
						<button style={PROJ_BUTTON_STYLE}>{'Github'}</button>
					</a>
				</div>
				<br />
				<br />
				<div style={PROJECT_CONTAINER_STYLE}>
					<img src={Hubble} style={IMG_STYLE} />
					<a href={'https://hubble-simple-project.netlify.app/'} target={'_blank'}>
						<button style={WEB_BUTTON_STYLE}>{'Website'}</button>
					</a>
					<a href={'https://github.com/ms-ahmed/hubble'} target={'_blank'}>
						<button style={PROJ_BUTTON_STYLE}>{'Github'}</button>
					</a>
				</div>
				<br />
				<br />
			</div>
		</Fragment>
	);
};

export default Profile;
