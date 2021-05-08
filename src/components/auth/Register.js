import React, { Component } from 'react';
import { Card, Form, Input, Row, Col, Button, Checkbox } from 'antd';

class Register extends Component {
	state = {};
	layout = {
		labelCol: { span: 8 },
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
					<Col span={10} offset={7}>
						<Card title="Register" bordered={false} style={{ padding: '30px', textAlign: 'center' }}>
							<Form
								{...this.layout}
								name="basic"
								initialValues={{ remember: true }}
								onFinish={this.onFinish}
								onFinishFailed={this.onFinishFailed}
							>
								<Form.Item
									label="Full Name"
									name="fullname"
									rules={[
										{ required: true, type: 'string', message: 'Please input your full name!' }
									]}
								>
									<Input />
								</Form.Item>
								<Form.Item
									label="Email"
									name="email"
									rules={[ { required: true, type: 'email', message: 'Please input your email!' } ]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="Password"
									name="password"
									rules={[ { required: true, message: 'Please input your password!' } ]}
								>
									<Input.Password />
								</Form.Item>

								<Form.Item
									label="Confirm Password"
									name="cpassword"
									rules={[ { required: true, message: 'Please confirm your password!' } ]}
								>
									<Input.Password />
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

export default Register;
