import React from 'react';
import { animated } from 'react-spring';
// import { Container } from './styles';
interface Props {
	index: number;
	props: object;
	style: object;
	items: string;
}
const P: React.FC<any> = (props: Props) => {
	return (
		<animated.p key={props.index} style={props.style}>
			{props.items}
		</animated.p>
	);
};

export default P;
