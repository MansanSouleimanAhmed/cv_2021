import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
				<h1>Msa</h1>
			</div>
		</Fragment>
	);
};

export default Msa;
