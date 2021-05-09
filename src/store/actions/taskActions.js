export const createTask = (task) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to the database
        const firestore = getFirestore();
        
		firestore
			.collection('tasks')
			.add({
				...task,
                author: 'daginegussu',
                status: 0,
				lastUpdatedAt: firestore.FieldValue.serverTimestamp(),
				createdAt: firestore.FieldValue.serverTimestamp()
			})
			.then(() => {
				dispatch({ type: 'CREATE_TASK', payload: task });
			})
			.catch((e) => {
				dispatch({ type: 'CREATE_TASK_ERROR', payload: e });
			});
	};
};
