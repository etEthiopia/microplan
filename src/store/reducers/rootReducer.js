import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import {firestoreReducer} from 'redux-firestore'

export default combineReducers({
	auth: authReducer,
	task: taskReducer,
	firestore: firestoreReducer
});
