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
				<div>
					<p style={{ wordBreak: 'break-all', paddingBottom: '20px', paddingTop: '70px' }}>
						<strong>Mail</strong> : <span> mansan.souleiman.ahmed@gmail.com</span>
					</p>
					<hr />
					<p style={{ wordBreak: 'break-all', paddingBottom: '20px', paddingTop: '20px' }}>
						<strong>Phone number</strong> : <span> + 32 465 34 74 37</span>
					</p>
					<hr />
					<p style={{ wordBreak: 'break-all', paddingBottom: '20px', paddingTop: '20px' }}>
						<strong>Location</strong> : <span> Leuven</span>
					</p>
					<hr />
					<p style={{ wordBreak: 'break-all', paddingBottom: '20px', paddingTop: '20px' }}>
						<strong>Postal code</strong> : <span> 3000 </span>
					</p>
					<hr />
				</div>
			</div>
		</Fragment>
	);
};

export default Contact;
