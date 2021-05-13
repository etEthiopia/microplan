import React from 'react';
import { Spin } from 'antd';

const style = {
	textAlign: 'center',
	width: '100%',
	height: '100%',
	background: 'rgba(0, 0, 0, 0.05)',
	borderRadius: '4px'
};

const spinStyle = {
	margin: '0px',
	position: 'fixed',
	top: '45%',
	msTrasform: 'translateY(-50%)',
	transform: 'translateY(-50%)'
};

const Loading = () => {
	return (
		<div style={style}>
			<Spin size="large" style={spinStyle} />
		</div>
	);
};

export default Loading;
