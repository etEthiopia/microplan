import React, { Component } from 'react';
import { Card, Form, Select, Input, Row, Col, Button, Checkbox } from 'antd';

class CreateTask extends Component {
	state = {};
	layout = {
		labelCol: { span: 6 },
		wrapperCol: { span: 16 }
	};
	tailLayout = {
		wrapperCol: { offset: 8, span: 16 }
	};

	onFinish = (values) => {
		console.log('Success:', values['email']);
	};

	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	render() {
		return (
			<div className="site-card-border-less-wrapper">
				<Row>
					<Col span={16} offset={4}>
						<Card title="Add a New Task" bordered={false} style={{ padding: '30px', textAlign: 'center' }}>
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
									<Input.TextArea rows="5" />
								</Form.Item>
								<Form.Item
									name="category"
									label="Task Category"
									hasFeedback
									rules={[ { required: true, message: 'Please select your Category!' } ]}
								>
									<Select defaultValue="personal">
										<Select value="personal">Personal</Select>
										<Select value="team1">A Team</Select>
									</Select>
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

export default CreateTask;
