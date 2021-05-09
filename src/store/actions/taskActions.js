export const createTask = (task) => {
	return (dispatch, getState) => {
		// make async call to the database
		console.log(task);
		dispatch({ type: 'CREATE_TASK', payload: task });
	};
};
