import React, { Component } from 'react';
import { Carousel, Row, Col, Card, Divider, Tag, Typography } from 'antd';

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
					<Typography level={1}>Personal Tasks</Typography>
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
					<Typography level={1}>Team 1</Typography>
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
			</div>
		);
	}
}

export default Tasks;
