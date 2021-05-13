import { toast } from 'react-toastify';

//import tasksData from '../../dummydata/tasksData';

const initState = [];

const taskReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_TASK':
			toast.success('Task Added');
			window.location = '/home/tasks';
			return state;
		case 'CREATE_TASK_ERROR':
			toast.error('Task Not Added');
			return state;
		case 'CHANGE_TASK_STATUS':
			return state;
		case 'CHANGE_TASK_STATUS_ERROR':
			return state;
		case 'DELETE_TASK':
			return state;
		case 'DELETE_TASK_ERROR':
			return state;
		default:
			return state;
	}
};

export default taskReducer;
