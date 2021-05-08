import React, { Component } from 'react';
import { Carousel, Row, Col, Card, Divider, Tag, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Task from './components/Task';

const { Title } = Typography;

class Tasks extends Component {
	state = {};
	contentStyle = {
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79'
	};

	onChange(a, b, c) {
		console.log(a, b, c);
	}

	render() {
		return (
			<div>
				<Row>
					<Title level={3}>Personal Tasks</Title>
					<Col span={24}>
						<Carousel afterChange={this.onChange}>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									<Col span={8}>
										<Card title="Task Title" bordered={false}>
											Task Content
											<Divider />
											<div className="task-status-badge-div">
												<Tag color="red-inverse">None</Tag>
											</div>
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Card title" bordered={false}>
											Card content
											<Divider />
											<div className="task-status-badge-div">
												<Tag color="gold-inverse">In Progress</Tag>
											</div>
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Card title" bordered={false}>
											Card content
											<Divider />
											<div className="task-status-badge-div">
												<Tag color="green-inverse">Done</Tag>
											</div>
										</Card>
									</Col>
								</Row>
							</div>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									<Col span={8}>
										<Card title="Card title" bordered={false}>
											Card content
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Card title" bordered={false}>
											Card content
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Card title" bordered={false}>
											Card content
										</Card>
									</Col>
								</Row>
							</div>
						</Carousel>,
					</Col>
				</Row>
				<Divider />
				<Row>
					<Title level={3}>Team 1</Title>
					<Col span={24}>
						<Carousel afterChange={this.onChange}>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									<Col span={8}>
										<Card title="Task Title" bordered={false}>
											Task Content
											<Divider />
											<div className="task-status-badge-div">
												<Tag color="red-inverse">None</Tag>
											</div>
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Card title" bordered={false}>
											Card content
											<Divider />
											<div className="task-status-badge-div">
												<Tag color="gold-inverse">In Progress</Tag>
											</div>
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Card title" bordered={false}>
											Card content
											<Divider />
											<div className="task-status-badge-div">
												<Tag color="green-inverse">Done</Tag>
											</div>
										</Card>
									</Col>
								</Row>
							</div>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									<Task />
									<Task />
									<Task />
								</Row>
							</div>
						</Carousel>
						<Button className="fab-container" type="primary" shape="circle" icon={<PlusOutlined />} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Tasks;
