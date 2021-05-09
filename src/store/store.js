import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { reactReuxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from '../config/firebaseConfig';

const store = createStore(
	rootReducer,
	compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))),
	reduxFirestore(firebaseConfig),
	reactReuxFirebase(firebaseConfig)
);

export default store;
