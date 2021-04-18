import { combineReducers } from 'redux';

import MsaContent from './msa-content';
import ProfileContent from './profile-content';
import ProjectContent from './project-content';
import ContactContent from './contact-content';

//This where put all your reducers to be combined
const allReducer = combineReducers({
	MsaContent,
	ProfileContent,
	ProjectContent,
	ContactContent,
});
export default allReducer;
