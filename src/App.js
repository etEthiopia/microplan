import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/dashboard/Home';
import Landing from './components/landing/Landing';
import Navbar from './components/layout/Navbar';
import store from './store/store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
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
			</Provider>
		);
	}
}

export default App;
