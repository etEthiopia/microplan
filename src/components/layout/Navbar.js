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
			<Menu
				theme="dark"
				onClick={this.handleClick}
				style={{ padding: '0rem 5rem' }}
				selectedKeys={[ this.state.current ]}
				mode="horizontal"
			>
				<Menu.Item key="home" style={{ fontSize: '1.5rem' }}>
					MicroPlan
				</Menu.Item>
				<Menu.Item style={{ float: 'right' }} key="Register">
					Register
				</Menu.Item>
				<Menu.Item style={{ float: 'right' }} key="Log In">
					Log In
				</Menu.Item>
			</Menu>
		);
	}
}

export default Navbar;
