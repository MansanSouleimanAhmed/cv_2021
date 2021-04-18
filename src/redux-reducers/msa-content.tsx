const MsaContent = (state = false, action: any) => {
	switch (action.type) {
		case 'Msa':
			return true;
		case 'False':
			return false;
		default:
			return state;
	}
};
export default MsaContent;
