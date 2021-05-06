import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/dashboard/Home';
import Navbar from './components/layout/Navbar';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{/* <Navbar /> */}
					<Home />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
