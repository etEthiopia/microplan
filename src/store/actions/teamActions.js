export const createTeam = (team) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to the database
		const firestore = getFirestore();
		team.members.splice(0, 0, getState().firebase.auth.email);
		firestore
			.collection('teams')
			.add({
				...team,
				createdAt: firestore.FieldValue.serverTimestamp()
			})
			.then(() => {
				dispatch({ type: 'CREATE_TEAM', payload: team });
			})
			.catch((e) => {
				dispatch({ type: 'CREATE_TEAM_ERROR', payload: e });
			});
	};
};
