import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { Container } from './styles';

const Contact: React.FC = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	});

	return <div />;
};

export default Contact;
