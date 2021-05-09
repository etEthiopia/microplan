import React, { Component } from 'react';
import { Card, Form, Select, Input, Row, Col, Button, Checkbox } from 'antd';
import { createTask } from '../../../store/actions/taskActions';
import { connect } from 'react-redux';

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
			team: values['type'] == 'personal' ? '' : values['team']
		});
	};

	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	onTypeChange = (event) => {
		var type = false;
		if (event == 'team') {
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
										<Select value="personal">Personal</Select>
										<Select value="team">A Team</Select>
									</Select>
								</Form.Item>
								{this.state.team && (
									<Form.Item
										name="team"
										label="Team"
										hasFeedback
										rules={[ { required: true, message: 'Please select your Team!' } ]}
									>
										<Select style={{ width: 'auto', minWidth: '150px' }}>
											<Select value="Team 1">Team 1</Select>
											<Select value="Team 2">Team 2</Select>
										</Select>
									</Form.Item>
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

const mapDispatchToProps = (dispatch) => {
	return {
		createTask: (task) => dispatch(createTask(task))
	};
};

export default connect(null, mapDispatchToProps)(CreateTask);
