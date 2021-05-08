import { Col, Card, Divider, Button, Modal } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import { Typography } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
const { Title } = Typography;
const PageFooter = () => {
	return (
		<Footer style={{ padding: '0.5rem', height: '50px' }}>
			<Title style={{ padding: '0rem' }} level={3}>
				Microplan 2021
			</Title>
		</Footer>
	);
};

export default PageFooter;
