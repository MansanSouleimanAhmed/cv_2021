import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';

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
				<h1>Project</h1>
			</div>
		</Fragment>
	);
};

export default Profile;
