import tasksData from '../../dummydata/tasksData';

const initState = {
	tasks: [ tasksData ],
	taskcreation: ''
};

const taskReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_TASK':
			state.taskcreation = 'successful::' + action.payload.title;
			return state;
		case 'CREATE_TASK_ERROR':
			state.taskcreation = 'unsuccessful::' + action.payload.title;
			return state;
		default:
			return state;
	}
};

export default taskReducer;
