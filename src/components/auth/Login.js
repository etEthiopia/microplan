import React, { Component } from 'react';
import { Card, Layout, Form, Input, Row, Col, Button } from 'antd';
import Navbar from '../layout/Navbar';
import PageFooter from '../layout/Footer';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	state = {};
	layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 }
	};
	tailLayout = {
		wrapperCol: { offset: 8, span: 16 }
	};

	onFinish = (values) => {
		this.props.signIn({
			email: values['email'],
			password: values['password']
		});
		//console.log('Success:', values['email']);
	};

	onFinishFailed = (errorInfo) => {
		//console.log('Failed:', errorInfo);
	};
	render() {
		if (!this.props.auth.uid)
			return (
				<Layout style={{ textAlign: 'center', height: '100%' }}>
					<Navbar />
					<div className="site-card-border-less-wrapper" style={{ height: '100%' }}>
						<Row>
							<Col span={10} offset={7}>
								<Card title="Log In" bordered={false} style={{ padding: '30px', textAlign: 'center' }}>
									<Form
										{...this.layout}
										name="basic"
										initialValues={{ remember: true }}
										onFinish={this.onFinish}
										onFinishFailed={this.onFinishFailed}
									>
										<Form.Item
											label="Email"
											name="email"
											rules={[
												{ required: true, type: 'email', message: 'Please input your email!' }
											]}
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
					<PageFooter />
				</Layout>
			);
		return <Redirect to="/" />;
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
