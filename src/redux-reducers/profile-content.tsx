const ProfileContent = (state = false, action: any) => {
	switch (action.type) {
		case 'Profile':
			return true;
		case 'False':
			return false;
		default:
			return state;
	}
};
export default ProfileContent;
