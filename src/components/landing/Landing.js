import { Steps, Typography, Button, Row, Col, Layout, Divider } from 'antd';

import React, { Component } from 'react';
import CountUp from 'react-countup';
import Navbar from '../layout/Navbar';
import PageFooter from '../layout/Footer';
import Loading from '../layout/Loading';
import { connect, useSelector } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

const { Title } = Typography;
const { Step } = Steps;

const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79'
};

class Landing extends Component {
	state = {};
	render() {
		return (
			<Layout style={{ textAlign: 'center', backgroundColor: '#fff' }}>
				<Navbar />
				<div style={{ textAlign: 'center', backgroundColor: '#F0F2F5', padding: '4em 0em' }}>
					<Title level={1} style={{ marginBottom: '0em' }}>
						Micro Plan
					</Title>
					<Title style={{ marginBottom: '2em', marginTop: '0rem' }} level={3}>
						Follow Your Personal and Team Tasks
					</Title>
					<Button
						onClick={() => {
							window.location = '/register';
						}}
						style={{ marginRight: '1em' }}
						type="primary"
						size="large"
					>
						Register
					</Button>
					<Button
						onClick={() => {
							window.location = '/login';
						}}
						size="large"
					>
						Login
					</Button>
				</div>

				<Row style={{ marginBottom: '2em', marginTop: '5rem', marginLeft: '15rem', marginRight: '15rem' }}>
					{this.props.tasks && (
						<Col span={8}>
							<div>
								<Title style={{ marginBottom: '0rem', fontSize: '5rem' }} level={1}>
									<CountUp end={this.props.tasks.length} duration={0.7} />
								</Title>
								<Title style={{ marginTop: '0rem' }} level={2}>
									Tasks
								</Title>
							</div>
						</Col>
					)}
					{this.props.users && (
						<Col span={8}>
							<div>
								<Title style={{ marginBottom: '0rem', fontSize: '5rem' }} level={1}>
									<CountUp end={this.props.users.length} duration={0.7} />
								</Title>
								<Title style={{ marginTop: '0rem' }} level={2}>
									Users
								</Title>
							</div>
						</Col>
					)}
					{this.props.teams && (
						<Col span={8}>
							<div>
								<Title style={{ marginBottom: '0rem', fontSize: '5rem' }} level={1}>
									<CountUp end={this.props.teams.length} duration={0.7} />
								</Title>
								<Title style={{ marginTop: '0rem' }} level={2}>
									Teams
								</Title>
							</div>
						</Col>
					)}
					<Divider />
				</Row>

				<Row style={{ marginBottom: '5em', marginTop: '5rem' }}>
					<Col span={16} offset={4}>
						<Steps current={2}>
							<Step title="None" status="wait" description="Default State of a Task." />
							<Step title="In Progress" status="process" description="State of Progress." />
							<Step title="Done" status="finish" description="State of Completion." />
						</Steps>
					</Col>
				</Row>
				<PageFooter />
			</Layout>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.firestore);
	return {
		tasks: state.firestore.ordered.tasks,
		teams: state.firestore.ordered.teams,
		users: state.firestore.ordered.users
	};
};

export default compose(
	firestoreConnect(() => [ { collection: 'tasks' }, { collection: 'teams' }, { collection: 'users' } ]), // or { collection: 'todos' }
	connect(mapStateToProps)
)(Landing);
