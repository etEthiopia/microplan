import { toast } from 'react-toastify';

const teamReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CREATE_TEAM':
			toast.success('Team Created');
			window.location = '/home/teams';
			return state;
		case 'CREATE_TEAM_ERROR':
			toast.error('Team Not Created');
			return state;
		default:
			return state;
	}
};

export default teamReducer;
