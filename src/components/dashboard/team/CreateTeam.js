import React, { Component } from 'react';
import { Card, Form, Input, Row, Col, Button } from 'antd';
import { createTeam } from '../../../store/actions/teamActions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class CreateTeam extends Component {
	state = {};
	layout = {
		labelCol: { span: 6 },
		wrapperCol: { span: 16 }
	};
	tailLayout = {
		wrapperCol: { offset: 8, span: 16 }
	};

	onFinish = (values) => {
		console.log(values);
		var members = [];

		try {
			if (values['members'].includes('@')) {
				members = values['members'].split('--');
			}
		} catch (e) {
			toast.error('Please Use the Specified Format');
		}
		if (members.length == 0) {
			toast.error('Please Use the Specified Format');
		} else {
			this.props.createTeam({
				name: values['name'],
				members: members
			});
		}
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
					<Col span={22} offset={1}>
						<Card title="Add a New Task" bordered={false} style={{ padding: '30px' }}>
							<Form
								{...this.layout}
								name="basic"
								initialValues={{ remember: true }}
								onFinish={this.onFinish}
								onFinishFailed={this.onFinishFailed}
							>
								<Form.Item
									label="Team Name"
									name="name"
									rules={[ { required: true, type: 'string', message: 'Please input name!' } ]}
								>
									<Input />
								</Form.Item>
								<Form.Item
									name="members"
									label="Members Separated by '--' symbol"
									rules={[ { required: true, message: 'Please insert memembers!' } ]}
								>
									<Input.TextArea name="members" rows="3" />
								</Form.Item>

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
		createTeam: (task) => dispatch(createTeam(task))
	};
};

export default connect(null, mapDispatchToProps)(CreateTeam);
