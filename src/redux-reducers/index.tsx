import { combineReducers } from 'redux';
import ModaleReducer from './modale-reducer';
//This where put all your reducers to be combined
const allReducer = combineReducers({
	ModaleReducer,
});
export default allReducer;
