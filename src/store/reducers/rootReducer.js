import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
	auth: authReducer,
	task: taskReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
});
