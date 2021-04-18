import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';

const Profile: React.FC = () => {
	let profileContent: any = useSelector((state: any) => state.ProfileContent);
	if (profileContent === false) {
		return null;
	}
	let style = {};
	let styleFunction: any = () => {
		if (profileContent == false) {
			return (style = { display: 'none' });
		}
	};
	styleFunction();

	return (
		<Fragment>
			<div>
				<h1>Profile</h1>
			</div>
		</Fragment>
	);
};

export default Profile;
