import React, { Fragment, useRef, useEffect, useState } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import Header from '../header/header';
import P from './p';

const Main: React.FC = () => {
	// @ts-ignore
	const trans = (x) => `translateX(-${x}px)`;
	const items = [
		'I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_',
		'I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_',
	];
	const [trail, set] = useTrail(items.length, () => ({
		x: 0,
		config: { mass: 2, tension: 200, friction: 50 },
	}));

	return (
		<div
			className="container"
			// @ts-ignore
			onMouseMove={(e) => set({ x: e.clientX })}
		>
			<Header />
			<div className="left-div left-right-common-style">
				<div className="text-animation item-left">
					{trail.map((props, index) => (
						<P
							items={items}
							key={index}
							style={{
								// @ts-ignore
								transform: props.x.interpolate(trans),
							}}
						/>
					))}
				</div>
			</div>
			<div className="text-animation item-center">
				{trail.map((props, index) => (
					<P
						items={items}
						key={index}
						style={{
							// @ts-ignore
							transform: props.x.interpolate(trans),
						}}
					/>
				))}
			</div>
			<div className="right-div left-right-common-style">
				<div className="text-animation item-right">
					{trail.map((props, index) => (
						<P
							items={items}
							key={index}
							style={{
								// @ts-ignore
								transform: props.x.interpolate(trans),
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Main;
