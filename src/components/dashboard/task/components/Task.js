import { Col, Card, Divider, Tag } from 'antd';

const Task = () => {
	return (
		<Col span={8}>
			<Card title="Card title" bordered={false}>
				Card content
				<Divider />
				<div className="task-status-badge-div">
					<Tag color="green-inverse">Done</Tag>
				</div>
			</Card>
		</Col>
	);
};

export default Task;
