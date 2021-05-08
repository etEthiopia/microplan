import React, { Component } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Team from './components/Team';

const { Title } = Typography;

class Teams extends Component {
	state = {};
	contentStyle = {
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79'
	};

	onChange(a, b, c) {
		console.log(a, b, c);
	}

	render() {
		return (
			<div>
				<Row>
					<Title level={3}>Teams</Title>
					<Col span={24}>
						<div className="site-card-wrapper">
							<Row gutter={16}>
								<Team />
								<Team />
								<Team />
								<Team />
								<Team />
								<Team />
							</Row>
						</div>
					</Col>
					<Button className="fab-container" type="primary" shape="circle" icon={<PlusOutlined />} />
				</Row>
			</div>
		);
	}
}

export default Teams;
