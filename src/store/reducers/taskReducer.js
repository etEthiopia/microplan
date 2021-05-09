import tasksData from '../../dummydata/tasksData';

const initState = {
	tasks: [ tasksData ]
};

const taskReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_TASK':
			console.log(JSON.stringify(action.payload) + ' CREATED');
			break;

		default:
			break;
	}
	return state;
};

export default taskReducer;
