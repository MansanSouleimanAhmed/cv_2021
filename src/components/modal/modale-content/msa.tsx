import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { P_STYLE } from '../style';

const Msa: React.FC = () => {
	let msaContent: any = useSelector((state: any) => state.MsaContent);
	let style = {};
	let styleFunction: any = () => {
		if (msaContent == false) {
			return (style = { display: 'none' });
		}
	};
	styleFunction();

	return (
		<Fragment>
			<div style={style}>
				<p style={P_STYLE}>
					<strong>Who am I?</strong>
				</p>
				<p style={P_STYLE}>
					I am a self-motivated and proactive young individual, that have the ability to work independently
					and collaboratively as part of a team. I can take creative feedback constructively in order to
					improve my skills.I do my best to build the applications with structured code as I understand how
					frustrating a badly structured code can be.
				</p>
				<p style={P_STYLE}>
					<strong>What do I want?</strong>
				</p>
				<p style={P_STYLE}>
					I would like to build an innovative product to be used by thousands of users.Since I am not afraid
					to learn different technologies, I am open minded and will do my best to get a the proficient
					knowledge about the set of technologies required to build your projects.
				</p>
			</div>
		</Fragment>
	);
};

export default Msa;
