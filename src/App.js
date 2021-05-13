import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/dashboard/Home';
import Landing from './components/landing/Landing';
import Navbar from './components/layout/Navbar';
import store from './store/store';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './config/firebaseConfig';
import { ToastContainer } from 'react-toastify';
import { connect, useSelector } from 'react-redux';
import Loading from './components/layout/Loading';

class App extends Component {
	state = {};

	render() {
		const { auth } = this.props;
		return (
			<ReactReduxFirebaseProvider {...rrfProps}>
				<BrowserRouter>
					<AuthIsLoaded>
						<ToastContainer autoClose={3000} hideProgressBar={true} />
						<div className="App">
							{!auth.uid ? (
								<Route path="/" exact={true} component={Landing} />
							) : (
								<Route path="/" exact={true} component={Home} />
							)}
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/home" component={Home} />

							{/* <Navbar /> */}
							{/* <Home /> */}
						</div>
					</AuthIsLoaded>
				</BrowserRouter>
			</ReactReduxFirebaseProvider>
		);
	}
}

const rrfProps = {
	firebase,
	config: {
		userProfile: 'users',
		useFirestoreForProfile: true
	},
	dispatch: store.dispatch,
	createFirestoreInstance
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
};

function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return <Loading />;
	return children;
}

export default connect(mapStateToProps)(App);
