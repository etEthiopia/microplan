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

export const updateTaskStatus = (id, status) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to the database
		const firestore = getFirestore();

		firestore
			.collection('tasks')
			.doc(id)
			.update({
				status: status,
				lastUpdatedAt: firestore.FieldValue.serverTimestamp()
			})
			.then(() => {
				dispatch({ type: 'CHANGE_TASK_STATUS', payload: { id: id, status: status } });
			})
			.catch((e) => {
				dispatch({ type: 'CHANGE_TASK_STATUS_ERROR', payload: e });
			});
	};
};

export const deleteTask = (id) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to the database
		const firestore = getFirestore();

		firestore
			.collection('tasks')
			.doc(id)
			.delete()
			.then(() => {
				dispatch({ type: 'DELETE_TASK', payload: { id: id } });
			})
			.catch((e) => {
				dispatch({ type: 'DELETE_TASK_ERROR', payload: e });
			});
	};
};
