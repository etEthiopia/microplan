import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	state = {
		current: '1'
	};

	handleClick = (e) => {
		//console.log('click ', e);
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
					<NavLink to="/"> MicroPlan</NavLink>
				</Menu.Item>
				<Menu.Item style={{ float: 'right' }} key="Register">
					<NavLink to="/register"> Register</NavLink>
				</Menu.Item>
				<Menu.Item style={{ float: 'right' }} key="Log In">
					<NavLink to="/login"> Log In</NavLink>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Navbar;
