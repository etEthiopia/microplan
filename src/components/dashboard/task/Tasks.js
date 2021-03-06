import React, { Component } from 'react';
import { Carousel, Row, Modal, Col, Card, Divider, Tag, Typography, Button, Form, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { connect, useSelector } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { updateTaskStatus, deleteTask } from '../../../store/actions/taskActions';
import Loading from '../../layout/Loading';

const { Title } = Typography;

class Tasks extends Component {
	state = {
		personalTasks: [],
		teamTasks: [],
		modal: false,
		toBeDeleted: ''
	};
	contentStyle = {
		color: '#ffffff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79'
	};

	taskCardStatusStyle = {
		position: 'absolute',
		bottom: 25,
		right: 20
	};

	onChange(a, b, c) {
		//console.log(a, b, c);
	}

	onChangeStatus(id, e) {
		this.props.updateTaskStatus(id, e);
	}

	handleOk() {
		this.props.deleteTask(this.state.toBeDeleted);
		this.setState({
			modal: false
		});
	}

	handleCancel() {
		this.setState({
			modal: false
		});
	}

	onDelete(id) {
		this.setState({
			modal: true,
			toBeDeleted: id
		});
	}

	addAfter(array, index, newItem) {
		return [ ...array.slice(0, index), newItem, ...array.slice(index) ];
	}

	checkThingsOut() {
		var pkey = 0;
		var pcounter = 0;
		var index = 0;
		const personalTasks = [];
		const teamTasks = [];
		try {
			this.props.tasks.forEach((task) => {
				if (task.type == 0) {
					if (personalTasks.length > pkey) {
						personalTasks[pkey].push(task);
						pcounter++;
					} else {
						personalTasks[pkey] = [ task ];
						pcounter++;
					}

					if (pcounter == 3) {
						pkey++;
						pcounter = 0;
					}
				} else if (task.type == 1) {
					if (teamTasks.hasOwnProperty(task.team)) {
						while (true) {
							if (index < teamTasks[task.team].length) {
								//console.log(index + ' - ' + task.title);
								if (teamTasks[task.team][index].length < 3) {
									teamTasks[task.team][index].push(task);
									if (teamTasks[task.team][index].length == 3) {
										index++;
									}
									break;
								} else {
									teamTasks[task.team].push([ [ task ] ]);
									break;
								}
							} else {
								teamTasks[task.team].push([ task ]);
								break;
							}
						}
					} else {
						teamTasks[task.team] = [ [ task ] ];
					}
				}
			});
		} catch (e) {
			//window.alert(e);
		}
		return {
			personalTasks: personalTasks,
			teamTasks: teamTasks
		};
	}

	render() {
		const obj = this.checkThingsOut();
		const personalTasks = obj.personalTasks;
		const teamTasks = obj.teamTasks;
		// console.log('render');
		// console.log(teamTasks);
		return (
			<div>
				<TasksAreLoaded>
					<div>
						<Row>
							{personalTasks && personalTasks.length > 0 ? <Title level={3}>Personal Tasks</Title> : ''}

							<Col span={24}>
								<Carousel afterChange={this.onChange}>
									{personalTasks &&
										personalTasks.map((personalTaskBunch) => (
											<div className="site-card-wrapper">
												<Row gutter={16}>
													{personalTaskBunch &&
														personalTaskBunch.map((personalTask) => (
															<Col xs={24} md={12} xl={8} key={personalTask.id}>
																<Card
																	title={personalTask.title}
																	bordered={false}
																	style={{ height: '100%' }}
																>
																	{personalTask.description}
																	<Divider />
																	<div className="task-status-badge-div">
																		{personalTask.status == 0 ? (
																			<Tag
																				style={this.taskCardStatusStyle}
																				color="red-inverse"
																			>
																				None
																			</Tag>
																		) : (
																			''
																		)}
																		{personalTask.status == 1 ? (
																			<Tag
																				style={this.taskCardStatusStyle}
																				color="gold-inverse"
																			>
																				In Progress
																			</Tag>
																		) : (
																			''
																		)}
																		{personalTask.status == 2 ? (
																			<Tag
																				style={this.taskCardStatusStyle}
																				color="green-inverse"
																			>
																				Done
																			</Tag>
																		) : (
																			''
																		)}
																	</div>

																	<Select
																		style={{
																			width: 'auto',

																			paddingLeft: '0px'
																		}}
																		onChange={(e) => {
																			this.onChangeStatus(personalTask.id, e);
																		}}
																		defaultValue="Change Status"
																	>
																		<Select value={0}>None</Select>
																		<Select value={1}>In Progress</Select>
																		<Select value={2}>Done</Select>
																	</Select>
																	<Button
																		type="danger"
																		icon={<DeleteOutlined />}
																		onClick={() => {
																			this.onDelete(personalTask.id);
																		}}
																	/>
																</Card>
															</Col>
														))}
												</Row>
											</div>
										))}
								</Carousel>
							</Col>
						</Row>
						<TeamsAreLoaded>
							{teamTasks &&
								Object.keys(teamTasks).map((keyName) => (
									<Row>
										<Divider />

										{this.props.teams &&
											this.props.teams.map(
												(team) =>
													team.id == keyName ? <Title level={3}>{team.name}</Title> : ''
											)}

										<Col span={24}>
											<Carousel afterChange={this.onChange}>
												{teamTasks[keyName] &&
													teamTasks[keyName].map((teamBunch) => (
														<div className="site-card-wrapper">
															<Row gutter={16}>
																{teamBunch &&
																	teamBunch.map((teamTask) => (
																		<Col xs={24} md={12} xl={8} key={teamTask.id}>
																			<Card
																				title={teamTask.title}
																				bordered={false}
																				style={{ height: '100%' }}
																			>
																				{teamTask.description}
																				<Divider />
																				<div className="task-status-badge-div">
																					{teamTask.status == 0 ? (
																						<Tag
																							style={
																								this.taskCardStatusStyle
																							}
																							color="red-inverse"
																						>
																							None
																						</Tag>
																					) : (
																						''
																					)}
																					{teamTask.status == 1 ? (
																						<Tag
																							style={
																								this.taskCardStatusStyle
																							}
																							color="gold-inverse"
																						>
																							In Progress
																						</Tag>
																					) : (
																						''
																					)}
																					{teamTask.status == 2 ? (
																						<Tag
																							style={
																								this.taskCardStatusStyle
																							}
																							color="green-inverse"
																						>
																							Done
																						</Tag>
																					) : (
																						''
																					)}
																				</div>
																				<Select
																					style={{
																						width: 'auto',

																						paddingLeft: '0px'
																					}}
																					onChange={(e) => {
																						this.onChangeStatus(
																							teamTask.id,
																							e
																						);
																					}}
																					defaultValue={
																						<option value={teamTask.status}>
																							Change Status
																						</option>
																					}
																				>
																					<Select value={0}>None</Select>
																					<Select value={1}>
																						In Progress
																					</Select>
																					<Select value={2}>Done</Select>
																				</Select>
																				<Button
																					type="danger"
																					icon={<DeleteOutlined />}
																					onClick={() => {
																						this.onDelete(teamTask.id);
																					}}
																				/>
																			</Card>
																		</Col>
																	))}
															</Row>
														</div>
													))}
											</Carousel>
										</Col>
									</Row>
								))}
						</TeamsAreLoaded>
						<Modal
							title="Confirm"
							visible={this.state.modal}
							onOk={() => {
								this.handleOk();
							}}
							onCancel={() => {
								this.handleCancel();
							}}
						>
							<p>Are You Sure, You Want To Delete the Task?</p>
						</Modal>
						<Button
							className="fab-container"
							type="primary"
							onClick={() => {
								window.location.href = '/home/createtask/';
							}}
							shape="circle"
							icon={<PlusOutlined />}
						/>
					</div>
				</TasksAreLoaded>
				<Button
					className="fab-container"
					type="primary"
					onClick={() => {
						window.location.href = '/home/createtask/';
					}}
					shape="circle"
					icon={<PlusOutlined />}
				/>
			</div>
		);
	}
}

function TasksAreLoaded({ children }) {
	const tasks = useSelector((state) => state.firestore.ordered.tasks);
	if (!isLoaded(tasks)) return <Loading />;
	return children;
}

function TeamsAreLoaded({ children }) {
	const teams = useSelector((state) => state.firestore.ordered.teams);
	if (!isLoaded(teams)) return <Loading />;
	return children;
}

var uid = '';
var email = '';

const mapStateToProps = (state) => {
	if (state.firebase.auth.uid) {
		uid = state.firebase.auth.uid;
		email = state.firebase.auth.email;
	}
	return {
		tasks: state.firestore.ordered.tasks,
		teams: state.firestore.ordered.teams
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateTaskStatus: (id, status) => dispatch(updateTaskStatus(id, status)),
		deleteTask: (id) => dispatch(deleteTask(id))
	};
};

export default compose(
	firestoreConnect(() => [
		{ collection: 'tasks', where: [ 'author', '==', uid ], orderBy: [ 'createdAt', 'desc' ] },
		{ collection: 'teams', where: [ 'members', 'array-contains', email ], orderBy: [ 'createdAt', 'desc' ] }
	]), // or { collection: 'todos' }
	connect(mapStateToProps, mapDispatchToProps)
)(Tasks);
