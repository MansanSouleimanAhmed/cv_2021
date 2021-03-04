import React, { Fragment, useRef, useEffect, useState } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import Header from '../header/header';

const Main: React.FC = () => {
	return (
		<div className="container">
			<Header />
		</div>
	);
};

export default Main;
