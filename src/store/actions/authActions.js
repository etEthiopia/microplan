export const signIn = (creds) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signInWithEmailAndPassword(creds.email, creds.password)
			.then(() => {
				dispatch({ type: 'SIGN_IN' });
			})
			.catch((err) => {
				dispatch({ type: 'SIGN_IN_ERROR', payload: err });
			});
	};
};

export const signUp = (profile) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();
		firebase
			.auth()
			.createUserWithEmailAndPassword(profile.email, profile.password)
			.then((res) => {
				return firestore.collection('users').doc(res.user.uid).set({
					name: profile.name
				});
			})
			.then(() => {
				dispatch({ type: 'SIGN_UP' });
			})
			.catch((err) => {
				dispatch({ type: 'SIGN_UP_ERROR', payload: err });
			});
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'SIGN_OUT' });
			})
			.catch((err) => {
				dispatch({ type: 'SIGN_OUT_ERROR', payload: err });
			});
	};
};
