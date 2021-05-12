import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/dashboard/Home';
import Landing from './components/landing/Landing';
import Navbar from './components/layout/Navbar';
import store from './store/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './config/firebaseConfig';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<BrowserRouter>
						<div className="App">
							<Route path="/" exact={true} component={Landing} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/home" component={Home} />

							{/* <Navbar /> */}
							{/* <Home /> */}
						</div>
					</BrowserRouter>
				</ReactReduxFirebaseProvider>
			</Provider>
		);
	}
}

const rrfProps = {
	firebase,
	config: {},
	dispatch: store.dispatch,
	createFirestoreInstance
};

export default App;
