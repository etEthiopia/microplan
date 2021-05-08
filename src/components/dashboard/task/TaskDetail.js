import React, { Component } from 'react';
import { Card, Divider, Button, Dropdown, Menu, Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class TaskDetail extends Component {
	state = {};
	handleMenuClick(e) {
		console.log('click', e);
	}
	render() {
		return (
			<div className="site-card-border-less-wrapper">
				<Card title="Task Title" bordered={false} style={{ width: '100%' }}>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus PageMaker including versions of
						Lorem Ipsum.
					</p>
					<Divider />
					<div className="task-status-badge-div">
						<Dropdown
							overlay={
								<Menu onClick={this.handleMenuClick}>
									<Menu.Item key="none">
										<Tag color="red-inverse" style={{ width: '100%' }}>
											None
										</Tag>
									</Menu.Item>
									<Menu.Item key="inprogress">
										<Tag color="gold-inverse" style={{ width: '100%' }}>
											In Progress
										</Tag>
									</Menu.Item>
									<Menu.Item key="done">
										<Tag color="green-inverse" style={{ width: '100%' }}>
											Done
										</Tag>
									</Menu.Item>
								</Menu>
							}
						>
							<Button>
								<Tag color="red-inverse">None</Tag>
								<DownOutlined />
							</Button>
						</Dropdown>
					</div>
				</Card>
			</div>
		);
	}
}

export default TaskDetail;
