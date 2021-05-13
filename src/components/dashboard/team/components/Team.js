import { Col, Card, Typography } from 'antd';

import React from 'react';
const { Title } = Typography;

const Team = (props) => {
	return (
		<Col xs={24} md={12} xl={8} style={{ marginBottom: '1em' }}>
			<Card title={props.team.name} bordered={false}>
				{props.team.members.map((member) => <div>{member} </div>)}
			</Card>
		</Col>
	);
};

export default Team;
