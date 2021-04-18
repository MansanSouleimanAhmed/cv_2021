const ContactContent = (state = false, action: any) => {
	switch (action.type) {
		case 'Contact':
			return true;
		case 'False':
			return false;
		default:
			return state;
	}
};
export default ContactContent;
