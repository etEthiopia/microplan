import tasksData from '../../dummydata/tasksData';

const initState = {
	tasks: [ tasksData ]
};

const taskReducer = (state = initState, action) => {
	return state;
};

export default taskReducer;
