import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import teamReducer from './teamReducer';

export default combineReducers({
	auth: authReducer,
	task: taskReducer,
	team: teamReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
});
