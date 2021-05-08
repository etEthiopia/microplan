import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/dashboard/Home';
import Landing from './components/landing/Landing';
import Navbar from './components/layout/Navbar';

class App extends Component {
	render() {
		return (
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
		);
	}
}

export default App;
