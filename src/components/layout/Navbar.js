import React, { Component } from 'react';
import { Menu } from 'antd';

class Navbar extends Component {
	state = {
		current: '1'
	};

	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key
		});
	};

	render() {
		return (
			<Menu theme="dark" onClick={this.handleClick} selectedKeys={[ this.state.current ]} mode="horizontal">
				<Menu.Item key="home">MicroPlan</Menu.Item>
				<Menu.Item key="Register">Register</Menu.Item>
				<Menu.Item key="Log In">Log In</Menu.Item>
			</Menu>
		);
	}
}

export default Navbar;
