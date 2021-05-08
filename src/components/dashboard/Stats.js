import React, { Component } from 'react';
import { Row, Typography, Col, Card, Divider } from 'antd';
import { Doughnut, Line, Pie } from 'react-chartjs-2';

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
	personalTasksData = {
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

	teamPersonalTasksData = {
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

	teamPersonalTimelineData = {
		labels: [ '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021' ],
		datasets: [
			{
				label: 'Personal TImeline',
				data: [ 20, 12, 3, 5, 9, 3 ],
				fill: false,
				backgroundColor: this.colors.lineColor,
				borderColor: this.colors.lineBgColor
			}
		]
	};

	teamTimelineData = {
		labels: [ '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021', '19/01/2021' ],
		datasets: [
			{
				label: 'Personal TImeline',
				data: [ 20, 12, 12, 5, 19, 9 ],
				fill: false,
				backgroundColor: this.colors.teamlineColor,
				borderColor: this.colors.teamlineBgColor
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
		return (
			<div>
				<div>
					<Row>
						<Title level={3}>Stats</Title>
						<Col span={24}>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									<Col span={8}>
										<Card title="Total Tasks" bordered={false}>
											<Title level={1}>500</Title>
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Personal Tasks" bordered={false}>
											<Title level={1}>200</Title>
										</Card>
									</Col>
									<Col span={8}>
										<Card title="Team Tasks" bordered={false}>
											<Title level={1}>300</Title>
										</Card>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
					<Divider />
					<Row>
						<Title level={4}>Personal Stats</Title>
						<Col span={24}>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									<Col span={8}>
										<Card
											title={
												'Personal Stats : ' +
												this.personalTasksData.datasets[0].data.reduce((a, v) => (a = a + v), 0)
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
									<Col span={16}>
										<Card title="Personal Timeline" bordered={false}>
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
					<Title level={4}>Team Stats</Title>
					<Divider />
					<Row>
						<Title level={5}>Team 1</Title>

						<Col span={24}>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									<Col span={8} style={{ marginBottom: '1em' }}>
										<Card
											title={
												'Team 1 Tasks : ' +
												this.teamTasksData.datasets[0].data.reduce((a, v) => (a = a + v), 0)
											}
											bordered={false}
										>
											<Pie
												data={this.teamTasksData}
												height={200}
												width={null}
												options={this.doughnutOptions}
											/>
										</Card>
									</Col>
									<Col span={8} style={{ marginBottom: '1em' }}>
										<Card
											title={
												'Team 1 Personal Stats : ' +
												this.teamPersonalTasksData.datasets[0].data.reduce(
													(a, v) => (a = a + v),
													0
												)
											}
											bordered={false}
										>
											<Doughnut
												data={this.teamPersonalTasksData}
												height={200}
												width={null}
												options={this.doughnutOptions}
											/>
										</Card>
									</Col>
									<Col span={8} style={{ marginBottom: '1em' }}>
										<Card
											style={{ height: '100%' }}
											title="Personal Share of Team 1 Tasks"
											bordered={false}
										>
											<Title style={{ fontSize: '7rem' }} level={1}>
												45%
											</Title>
										</Card>
									</Col>
									<Col span={12}>
										<Card title="Team 1 Timeline" bordered={false}>
											<Line
												data={this.teamTimelineData}
												height={200}
												width={null}
												options={this.lineOptions}
											/>
										</Card>
									</Col>
									<Col span={12}>
										<Card title="Team 1 Personal Timeline" bordered={false}>
											<Line
												data={this.teamPersonalTimelineData}
												height={200}
												width={null}
												options={this.lineOptions}
											/>
										</Card>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Stats;
