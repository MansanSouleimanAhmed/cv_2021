import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { P_STYLE } from '../style';

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
			<div style={style}>
				<p style={P_STYLE}>
					<strong>Objective</strong>
				</p>
				<p style={P_STYLE}>
					My objective is to create and maintain optimally functioning websites and applications that serve as
					tools to achieve your company's mission and vision.
				</p>
				<ul>
					<li>
						<strong>Skills</strong>
					</li>
					<li>
						<p style={P_STYLE}>Ability to develop responsive websites</p>
					</li>
					<li>
						<p style={P_STYLE}>Proficient knowledge of HTML5,CSS3 / SASS & Javascript</p>
					</li>
					<li>
						<p style={P_STYLE}>Proficient React / Redux & Typescript</p>
					</li>
					<li>
						<p style={P_STYLE}>I can publish on Npm and write documentation</p>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Profile;
