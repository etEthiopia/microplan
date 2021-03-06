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
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Tasks from './task/Tasks';
import TaskDetail from './task/TaskDetail';
import CreateTask from './task/CreateTask';
import Teams from './team/Teams';
import Stats from './Stats';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import CreateTeam from './team/CreateTeam';

const { Header, Sider, Content } = Layout;

class Home extends Component {
	state = {
		collapsed: false,
		marginleft: 200
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

	menuHandler = (m) => {
		if (m.key != 'logout') {
			window.location.href = m.key;
		} else {
			this.props.signOut();
		}
	};

	render() {
		if (!this.props.auth.uid) return <Redirect to="/login" />;
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
								{this.props.profile.name ? this.state.collapsed ? (
									this.props.profile.name.charAt(0)
								) : (
									this.props.profile.name
								) : (
									''
								)}
							</Typography>
						</div>
						<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
							<Menu.Item onClick={this.menuHandler} key="/home/tasks" icon={<UnorderedListOutlined />}>
								Tasks
							</Menu.Item>
							<Menu.Item onClick={this.menuHandler} key="/home/teams" icon={<UsergroupDeleteOutlined />}>
								Teams
							</Menu.Item>
							<Menu.Item onClick={this.menuHandler} key="/home/stats" icon={<AreaChartOutlined />}>
								Stats
							</Menu.Item>
							<Menu.Item key="logout" onClick={this.menuHandler} icon={<DoubleLeftOutlined />}>
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
							<Switch>
								<Route path="/home/tasks" component={Tasks} />
								<Route path="/home/teams" component={Teams} />
								<Route path="/home/stats" component={Stats} />
								<Route path="/home/teams" component={Teams} />
								<Route path="/home/createtask" component={CreateTask} />
								<Route path="/home/createteam" component={CreateTeam} />
								<Route path="/home/task/:id" component={TaskDetail} />
								<Route path="/" component={Tasks} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
