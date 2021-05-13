import React, { Component } from 'react';
import { Row, Typography, Col, Card, Divider } from 'antd';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import Loading from '../layout/Loading';
import { connect, useSelector } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

const { Title } = Typography;

class Stats extends Component {
	state = {};
	colors = {
		red: 'rgb(245, 34, 45)',
		yellow: 'rgb(250, 173, 20)',
		green: 'rgb(82, 196, 26)',
		lineColor: 'rgb(19, 138, 255)',
		lineBgColor: 'rgba(19, 138, 255, 0.5)',
		teamlineColor: 'rgb(204, 76, 143)',
		teamlineBgColor: 'rgba(204, 76, 143, 0.5)'
	};
	totalTasksData = {
		labels: [ 'None', 'In Progress', 'Done' ],
		datasets: [
			{
				label: 'Personal Tasks',
				data: [ 70, 80, 50 ],
				backgroundColor: [ this.colors.red, this.colors.yellow, this.colors.green ],
				borderWidth: 1
			}
		]
	};

	teamTasksData = {
		labels: [ 'None', 'In Progress', 'Done' ],
		datasets: [
			{
				label: 'Team Tasks',
				data: [ 100, 60, 40 ],
				backgroundColor: [ this.colors.red, this.colors.yellow, this.colors.green ],
				borderWidth: 1
			}
		]
	};

	personalTasksData = {
		labels: [ 'None', 'In Progress', 'Done' ],
		datasets: [
			{
				label: 'Personal Tasks',
				data: [ 75, 15, 10 ],
				backgroundColor: [ this.colors.red, this.colors.yellow, this.colors.green ],
				borderWidth: 1
			}
		]
	};

	personalTimelineData = {
		labels: [ '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021' ],
		datasets: [
			{
				label: 'Personal TImeline',
				data: [ 12, 19, 3, 5, 2, 3 ],
				fill: false,
				backgroundColor: this.colors.lineColor,
				borderColor: this.colors.lineBgColor
			}
		]
	};

	doughnutOptions = {
		plugins: {
			legend: {
				display: true,
				position: 'bottom'
			}
		},
		responsive: true,
		maintainAspectRatio: false
	};

	lineOptions = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		},
		maintainAspectRatio: false,
		title: {
			display: false
		},
		plugins: {
			legend: {
				display: false
			}
		}
	};

	render() {
		if (this.props.tasks && this.props.tasks.length > 0) {
			var pnone = 0;
			var pinprogress = 0;
			var pdone = 0;
			var tnone = 0;
			var tinprogress = 0;
			var tdone = 0;

			this.props.tasks.map((task) => {
				switch (task.status) {
					case 0:
						if (task.type == 0) {
							pnone++;
						} else {
							tnone++;
						}
						break;
					case 1:
						if (task.type == 0) {
							pinprogress++;
						} else {
							tinprogress++;
						}
						break;
					case 2:
						if (task.type == 0) {
							pdone++;
						} else {
							tdone++;
						}
						break;
					default:
						break;
				}
			});
			this.totalTasksData.datasets[0].data = [ pnone + tnone, pinprogress + tinprogress, pdone + tdone ];
			this.personalTasksData.datasets[0].data = [ pnone, pinprogress, pdone ];
			this.teamTasksData.datasets[0].data = [ tnone, tinprogress, tdone ];
		}
		return (
			<TasksAreLoaded>
				<div>
					<div>
						<div>
							<Row>
								<Title level={3}>Stats</Title>
								<Col span={24}>
									<div className="site-card-wrapper">
										<Row gutter={16}>
											<Col span={8}>
												<Card title="Total Tasks" bordered={false}>
													<Title level={1}>
														{this.props.tasks && this.props.tasks.length}
													</Title>
												</Card>
											</Col>
											<Col span={8}>
												<Card title="Personal Tasks" bordered={false}>
													<Title level={1}>
														{this.props.tasks &&
															this.props.tasks.reduce(
																(a, b) => a + (b.type == 0 ? 1 || 0 : 0),
																0
															)}
													</Title>
												</Card>
											</Col>
											<Col span={8}>
												<Card title="Team Tasks" bordered={false}>
													<Title level={1}>
														{' '}
														{this.props.tasks &&
															this.props.tasks.reduce(
																(a, b) => a + (b.type == 1 ? 1 || 0 : 0),
																0
															)}
													</Title>
												</Card>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>
							<Divider />
							<Row>
								<Title level={4}>Task Status</Title>
								<Col span={24}>
									<div className="site-card-wrapper">
										<Row gutter={16}>
											<Col span={8}>
												<Card
													title={
														'Total Stats : ' +
														this.totalTasksData.datasets[0].data.reduce(
															(a, v) => (a = a + v),
															0
														)
													}
													bordered={false}
												>
													<Pie
														data={this.totalTasksData}
														height={250}
														width={null}
														options={this.doughnutOptions}
													/>
												</Card>
											</Col>
											<Col span={8}>
												<Card
													title={
														'Personal Tasks : ' +
														this.personalTasksData.datasets[0].data.reduce(
															(a, v) => (a = a + v),
															0
														)
													}
													bordered={false}
												>
													<Doughnut
														data={this.personalTasksData}
														height={250}
														width={null}
														options={this.doughnutOptions}
													/>
												</Card>
											</Col>
											<Col span={8}>
												<Card
													title={
														'Team Tasks : ' +
														this.teamTasksData.datasets[0].data.reduce(
															(a, v) => (a = a + v),
															0
														)
													}
													bordered={false}
												>
													<Doughnut
														data={this.teamTasksData}
														height={250}
														width={null}
														options={this.doughnutOptions}
													/>
												</Card>
											</Col>
										</Row>
										<Row style={{ marginTop: '1rem' }}>
											<Col span={24}>
												<Card title="Personal Timeline (Static Data)" bordered={false}>
													<Line
														data={this.personalTimelineData}
														height={250}
														width={null}
														options={this.lineOptions}
													/>
												</Card>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>

							<Divider />
						</div>
						{/* </TasksAreLoaded> */}
					</div>
				</div>
			</TasksAreLoaded>
		);
	}
}

function TasksAreLoaded({ children }) {
	const tasks = useSelector((state) => state.firestore.ordered.tasks);
	if (!isLoaded(tasks)) {
		return <Loading />;
	}
	return children;
}

var uid = '';

const mapStateToProps = (state) => {
	if (state.firebase.auth.uid) {
		uid = state.firebase.auth.uid;
	}
	return {
		tasks: state.firestore.ordered.tasks
	};
};

export default compose(
	firestoreConnect(() => [
		{ collection: 'tasks', where: [ 'author', '==', uid ], orderBy: [ 'createdAt', 'desc' ] }
	]), // or { collection: 'todos' }
	connect(mapStateToProps)
)(Stats);
