import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { IMG_STYLE, PROJECT_CONTAINER_STYLE, PROJ_BUTTON_STYLE, WEB_BUTTON_STYLE } from '../style';
import CV from '../../../images/cv-images.png';
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
					<img src={GameRPS} style={IMG_STYLE} />
					<a href={''} target={'_blank'}>
						<button style={WEB_BUTTON_STYLE}>{'Website'}</button>
					</a>
					<a href={''} target={'_blank'}>
						<button style={PROJ_BUTTON_STYLE}>{'Github'}</button>
					</a>
				</div>
				<br />
				<br />
				<div style={PROJECT_CONTAINER_STYLE}>
					<img src={Creatif} style={IMG_STYLE} />
					<a href={''} target={'_blank'}>
						<button style={WEB_BUTTON_STYLE}>{'Website'}</button>
					</a>

					<a href={''} target={'_blank'}>
						<button style={PROJ_BUTTON_STYLE}>{'Github'}</button>
					</a>
				</div>
				<br />
				<br />
				<div style={PROJECT_CONTAINER_STYLE}>
					<img src={Hubble} style={IMG_STYLE} />
					<a href={''} target={'_blank'}>
						<button style={WEB_BUTTON_STYLE}>{'Website'}</button>
					</a>
					<a href={''} target={'_blank'}>
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
