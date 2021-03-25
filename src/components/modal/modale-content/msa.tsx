import React, { Fragment } from 'react';
interface ModaleProps {
	modalevar: object;
	setmodalevar: any;
}
// import { Container } from './styles';

const Msa: React.FC<ModaleProps> = ({ setmodalevar, modalevar }) => {
	console.log(modalevar);
	return (
		<Fragment>
			<h1>test</h1>
		</Fragment>
	);
};

export default Msa;
