import tasksData from '../../dummydata/tasksData';

const initState = {
	tasks: [ tasksData ]
};

const taskReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_TASK':
			window.alert(JSON.stringify(action.payload) + ' CREATED');
			return state;
		case 'CREATE_TASK_ERROR':
			window.alert(action.payload + ' CREATION ERROR');
			return state;
		default:
			return state;
	}
};

export default taskReducer;
