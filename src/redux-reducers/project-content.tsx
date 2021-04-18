const ProjectContent = (state = false, action: any) => {
	switch (action.type) {
		case 'Project':
			return true;
		case 'False':
			return false;
		default:
			return state;
	}
};
export default ProjectContent;
