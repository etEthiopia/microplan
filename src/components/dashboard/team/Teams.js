import React, { Component } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Team from './components/Team';
import Loading from '../../layout/Loading';
import { connect, useSelector } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

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
		//console.log(a, b, c);
	}

	render() {
		return (
			<div>
				<TeamsAreLoaded>
					<Row>
						<Title level={3}>Teams</Title>
						<Col span={24}>
							<div className="site-card-wrapper">
								<Row gutter={16}>
									{this.props.teams &&
										this.props.teams.map((team) => <Team key={team.id} team={team} />)}
								</Row>
							</div>
						</Col>
					</Row>
				</TeamsAreLoaded>
				<Button
					className="fab-container"
					onClick={() => {
						window.location.href = '/home/createteam/';
					}}
					type="primary"
					shape="circle"
					icon={<PlusOutlined />}
				/>
			</div>
		);
	}
}
function TeamsAreLoaded({ children }) {
	const teams = useSelector((state) => state.firestore.ordered.teams);
	if (!isLoaded(teams)) return <Loading />;
	return children;
}

var email = '';

const mapStateToProps = (state) => {
	if (state.firebase.auth.email) {
		email = state.firebase.auth.email;
	}
	return {
		teams: state.firestore.ordered.teams
	};
};

export default compose(
	firestoreConnect(() => [
		{ collection: 'teams', where: [ 'members', 'array-contains', email ], orderBy: [ 'createdAt', 'desc' ] }
	]), // or { collection: 'todos' }
	connect(mapStateToProps)
)(Teams);
