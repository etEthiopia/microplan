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
import Tasks from './task/Tasks';
import TaskDetail from './task/TaskDetail';
import CreateTask from './task/CreateTask';
import Teams from './team/Teams';
import Stats from './Stats';

const { Header, Sider, Content } = Layout;

class Home extends Component {
	state = {
		collapsed: false,
		name: 'Dagmawi Negussu'
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		return (
			<Layout className="home-layout">
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo">
						<Typography level={3}>
							{this.state.collapsed ? this.state.name.charAt(0) : this.state.name}
						</Typography>
					</div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
						<Menu.Item key="tasks" icon={<UnorderedListOutlined />}>
							Tasks
						</Menu.Item>
						<Menu.Item key="teams" icon={<UsergroupDeleteOutlined />}>
							Teams
						</Menu.Item>
						<Menu.Item key="stats" icon={<AreaChartOutlined />}>
							Stats
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
						<Stats />
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Home;
