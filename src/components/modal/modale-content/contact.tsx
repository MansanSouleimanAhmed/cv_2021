import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';
// import { Container } from './styles';

const Contact: React.FC = () => {
	let contactContent: any = useSelector((state: any) => state.ContactContent);
	let style = {};
	let styleFunction: any = () => {
		if (contactContent == false) {
			return (style = { display: 'none' });
		}
	};
	styleFunction();

	return (
		<Fragment>
			<div style={style}>
				<h1>Contact</h1>
			</div>
		</Fragment>
	);
};

export default Contact;
