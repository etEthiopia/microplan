import { Col, Card, Divider, Button, Modal } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const Team = () => {
	const [ isModalVisible, setIsModalVisible ] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<Col span={8} style={{ marginBottom: '1em' }}>
			<Card title="Team Name" bordered={false}>
				Member 1<br /> Member 2<br /> Member 3<br /> Member 4
				<Divider />
				<div className="task-status-badge-div">
					<Button type="primary" danger icon={<LogoutOutlined />} onClick={showModal}>
						Leave
					</Button>
				</div>
			</Card>
			<Modal title="Cofirm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<p>Are You Sure, You want to leave?</p>
			</Modal>
		</Col>
	);
};

export default Team;
