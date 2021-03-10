import React, { Fragment, useState } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';

import Footer from './footer/footer';
import Header from './header/header';
import Modal from './modals/modal';
import P from './p';

interface ModalObj {
	modale: boolean;
	profile: boolean;
	msa: boolean;
	contact: boolean;
	project: boolean;
}

const Main: React.FC<any> = () => {
	const trans = (x: number) => `translateX(-${x}px)`;
	const initialState: ModalObj = {
		modale: false,
		profile: false,
		msa: false,
		contact: false,
		project: false,
	};
	const [modaleVar, setModaleVar] = useState(initialState);

	/* onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void => setMsa((msa) => !msa)} */
	const items = [
		'I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_',
		'I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_',
	];
	const [trail, set] = useTrail(items.length, () => ({
		x: 0,
		config: { mass: 2, tension: 200, friction: 50 },
	}));

	return (
		<Fragment>
			<Modal modalevar={modaleVar} setmodalevar={setModaleVar} />
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
				<Footer />
			</div>
		</Fragment>
	);
};

export default Main;
