import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { PROJECT_CONTAINER_STYLE } from '../style';

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
					<img />
				</div>
				<br />
				<br />
				<div style={PROJECT_CONTAINER_STYLE}>
					<img />
				</div>
				<br />
				<br />
				<div style={PROJECT_CONTAINER_STYLE}>
					<img />
				</div>
				<br />
				<br />
			</div>
		</Fragment>
	);
};

export default Profile;
