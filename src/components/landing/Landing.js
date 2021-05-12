import { Steps, Typography, Button, Row, Col, Layout, Divider } from 'antd';

import React, { Component } from 'react';
import CountUp from 'react-countup';
import Navbar from '../layout/Navbar';
import PageFooter from '../layout/Footer';

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
					<Button style={{ marginRight: '1em' }} type="primary" size="large">
						Register
					</Button>
					<Button size="large">Login</Button>
				</div>

				<Row style={{ marginBottom: '2em', marginTop: '5rem', marginLeft: '15rem', marginRight: '15rem' }}>
					<Col span={8}>
						<div>
							<Title style={{ marginBottom: '0rem', fontSize: '5rem' }} level={1}>
								<CountUp end={1230} duration={0.7} />
							</Title>
							<Title style={{ marginTop: '0rem' }} level={2}>
								Tasks
							</Title>
						</div>
					</Col>
					<Col span={8}>
						<div>
							<Title style={{ marginBottom: '0rem', fontSize: '5rem' }} level={1}>
								<CountUp end={209} duration={0.7} />
							</Title>
							<Title style={{ marginTop: '0rem' }} level={2}>
								Users
							</Title>
						</div>
					</Col>
					<Col span={8}>
						<div>
							<Title style={{ marginBottom: '0rem', fontSize: '5rem' }} level={1}>
								<CountUp end={23} duration={0.7} />
							</Title>
							<Title style={{ marginTop: '0rem' }} level={2}>
								Teams
							</Title>
						</div>
					</Col>
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

export default Landing;
