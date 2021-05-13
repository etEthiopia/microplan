import { toast } from 'react-toastify';

const initState = {};

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return state;
		case 'SIGN_IN_ERROR':
			toast.error(action.payload.toString());
			return state;
		case 'SIGN_OUT':
			return state;
		case 'SIGN_OUT_ERROR':
			toast.error(action.payload.toString());
			return state;
		case 'SIGN_UP':
			toast.success('Successfully Registered');
			return state;
		case 'SIGN_UP_ERROR':
			toast.error(action.payload.toString());
			return state;
		default:
			return state;
	}
};

export default authReducer;
