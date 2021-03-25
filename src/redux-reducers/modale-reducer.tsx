import { Reducer } from 'react';

const ReducerModale = (state = false, action: any) => {
	switch (action.type) {
		case 'ModaleMsaAction':
			return !state;
		default:
			return state;
	}
};
export default ReducerModale;
