import { Typography, Layout, Menu, Divider } from 'antd';
import React, { Component } from 'react';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UnorderedListOutlined,
	UsergroupDeleteOutlined,
	AreaChartOutlined,
	DoubleLeftOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Tasks from './task/Tasks';
import TaskDetail from './task/TaskDetail';
import CreateTask from './task/CreateTask';
import Teams from './team/Teams';
import Stats from './Stats';
import { NavLink } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

class Home extends Component {
	state = {
		collapsed: false,
		marginleft: 200,
		name: 'Dagmawi Negussu'
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});

		if (!this.state.collapsed) {
			setTimeout(
				function() {
					//Start the timer
					this.setState({ marginleft: 80 });
				}.bind(this),
				90
			);
		} else {
			setTimeout(
				function() {
					//Start the timer
					this.setState({ marginleft: 200 });
				}.bind(this),
				90
			);
		}
	};

	render() {
		return (
			<Router>
				<Layout className="home-layout" style={{ marginLeft: this.state.marginleft }}>
					<Sider
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
						style={{
							overflow: 'auto',
							height: '100vh',
							position: 'fixed',
							left: 0
						}}
					>
						<div className="logo">
							<Typography level={3}>
								{this.state.collapsed ? this.state.name.charAt(0) : this.state.name}
							</Typography>
						</div>
						<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
							<Menu.Item key="tasks" icon={<UnorderedListOutlined />}>
								<NavLink to="/home/tasks">Tasks</NavLink>
							</Menu.Item>
							<Menu.Item key="teams" icon={<UsergroupDeleteOutlined />}>
								<NavLink to="/home/teams"> Teams</NavLink>
							</Menu.Item>
							<Menu.Item key="stats" icon={<AreaChartOutlined />}>
								<NavLink to="/home/stats">Stats</NavLink>
							</Menu.Item>
							<Divider dashed />
							<Menu.Item key="logout" icon={<DoubleLeftOutlined />}>
								Log Out
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout className="site-layout">
						<Header className="site-layout-background" style={{ padding: 0 }}>
							{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
								className: 'trigger',
								onClick: this.toggle
							})}
						</Header>
						<Content
							className="site-layout-background"
							style={{
								margin: '24px 16px',
								padding: 24,
								minHeight: 280
							}}
						>
							{/* <Tasks /> */}
							{/* <TaskDetail /> */}
							{/* <CreateTask /> */}
							{/* <Teams /> */}
							{/* <Stats /> */}
							<Switch>
								<Route path="/home/tasks" component={Tasks} />
								<Route path="/home/teams" component={Teams} />
								<Route path="/home/stats" component={Stats} />
								<Route path="/home/teams" component={Teams} />
								<Route path="/home/createtask" component={CreateTask} />
								<Route path="/home/task/:id" component={TaskDetail} />
								<Route path="/" component={Tasks} />
							</Switch>
							{/* <Navbar /> */}
							{/* <Home /> */}
						</Content>
					</Layout>
				</Layout>
			</Router>
		);
	}
}

export default Home;
