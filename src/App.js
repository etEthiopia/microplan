import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
					{/* <Navbar /> */}
					{/* <Home /> */}
					<Login />
					{/* <Register /> */}
					{/* <Landing /> */}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
