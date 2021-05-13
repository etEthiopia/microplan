import React, { Component } from 'react';
import { Card, Form, Select, Input, Row, Col, Button, Typography } from 'antd';
import { createTask } from '../../../store/actions/taskActions';
import { connect, useSelector } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import Loading from '../../layout/Loading';

const { Title } = Typography;

class CreateTask extends Component {
	state = {
		team: false
	};
	layout = {
		labelCol: { span: 6 },
		wrapperCol: { span: 16 }
	};
	tailLayout = {
		wrapperCol: { offset: 8, span: 16 }
	};

	onFinish = (values) => {
		var description = values['description'];
		this.props.createTask({
			title: values['title'],
			description: description,
			type: values['type'],
			team: values['type'] == 0 ? '' : values['team']
		});
	};

	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	onTypeChange = (event) => {
		var type = false;
		if (event === 1) {
			type = true;
		}
		this.setState({
			team: type
		});
	};

	render() {
		return (
			<div className="site-card-border-less-wrapper">
				<Row>
					<Col span={16} offset={4}>
						<Card title="Add a New Task" bordered={false} style={{ padding: '30px' }}>
							<Form
								{...this.layout}
								name="basic"
								initialValues={{ remember: true }}
								onFinish={this.onFinish}
								onFinishFailed={this.onFinishFailed}
							>
								<Form.Item
									label="Title"
									name="title"
									rules={[ { required: true, type: 'string', message: 'Please input your title!' } ]}
								>
									<Input />
								</Form.Item>
								<Form.Item
									name="description"
									label="Description"
									rules={[ { required: true, message: 'Please input your description!' } ]}
								>
									<Input.TextArea name="description" rows="5" />
								</Form.Item>

								<Form.Item
									name="type"
									label="Task Category"
									hasFeedback
									rules={[ { required: true, message: 'Please select your Category!' } ]}
								>
									<Select onChange={this.onTypeChange} style={{ minWidth: '150px', width: 'auto' }}>
										<Select value={0}>Personal</Select>
										<Select value={1}>A Team</Select>
									</Select>
								</Form.Item>
								{this.state.team && (
									<TeamsAreLoaded>
										<Form.Item
											name="team"
											label="Team"
											hasFeedback
											rules={[
												{ required: this.state.team, message: 'Please select your Team!' }
											]}
										>
											<Select style={{ width: 'auto', minWidth: '150px' }}>
												{this.props.teams &&
													this.props.teams.map((team) => (
														<Select value={team.id}>{team.name}</Select>
													))}
											</Select>
										</Form.Item>
									</TeamsAreLoaded>
								)}

								<Form.Item {...this.tailLayout}>
									<Button type="primary" htmlType="submit" style={{ float: 'right' }}>
										Submit
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

function TeamsAreLoaded({ children }) {
	const teams = useSelector((state) => state.firestore.ordered.teams);
	if (!isLoaded(teams)) return <Loading />;
	return children;
}

var email = '';

const mapStateToProps = (state) => {
	if (state.firebase.auth.email) {
		email = state.firebase.auth.email;
	}
	return {
		teams: state.firestore.ordered.teams
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createTask: (task) => dispatch(createTask(task))
	};
};

export default compose(
	firestoreConnect(() => [
		{ collection: 'teams', where: [ 'members', 'array-contains', email ], orderBy: [ 'createdAt', 'desc' ] }
	]), // or { collection: 'todos' }
	connect(mapStateToProps, mapDispatchToProps)
)(CreateTask);
