import AsyncStorageLib from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setTasks } from '../redux/actions'
import CustomButton from '../utils/CustomButton'
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import PushNotificationIOS from '@react-native-community/push-notification-ios'

const Task = ({ navigation }) => {

	const { tasks, taskID } = useSelector(state => state.userReducer)
	const dispatch = useDispatch()

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [done, setDone] = useState(false);
	const [color, setColor] = useState('white');
	const [showBellModal, setShowBellModal] = useState('white');
	const [bellTime, setBellTime] = useState('1');

	useEffect(() => {
		getTask()
	}, [])

	const getTask = () => {
		const Task = tasks.find(task => task.ID === taskID);
		if(Task) {
			setTitle(Task.Title);
			setDescription(Task.Description);
			setDone(Task.Done)
			setColor(Task.Color)
		}
	}

	const handleTask = () => {
		if (title.length === 0) {
			Alert.alert('Warning!', 'Please write your task title')
		} else {
			try {
				let Task = {
					ID: taskID,
					Title: title,
					Description: description,
					Done: done,
					Color: color
				}
				const index = tasks.findIndex(task => task.ID === taskID);
				let newTasks = [];
				if(index > -1) {
					newTasks = [...tasks]
					newTasks[index] = Task
				} else {
					newTasks = [...tasks, Task] 
				}
				AsyncStorageLib.setItem('Tasks', JSON.stringify(newTasks)).then(() => {
					dispatch(setTasks(newTasks));
					Alert.alert('Success!', 'Task saved successfully ')
					navigation.goBack()
				}).catch(err => console.log(err))
			} catch (error) {
				console.log(error)
			}
		}
	}

	const setTaskAlarm = () => {
		const date = new Date();
		date.setSeconds(date.getSeconds() + parseInt(bellTime))
		PushNotificationIOS.scheduleLocalNotification({
			alertTitle: title,
			alertBody: description,
			fireDate: date.toISOString()
		})
	}

	return (
		<View style={styles.body}>
			<Modal 
				visible={showBellModal} 
				transparent 
				onRequestClose={() => setShowBellModal(false)}
				animationType='slide'
				hardwareAccelerated
			>
				<View style={styles.centered_view}>
					<View style={styles.bell_modal}>
						<View style={styles.bell_body}>
							<Text style={styles.text}>Remind me After</Text>
							<TextInput style={styles.bell_input} keyboardType='numeric' value={bellTime} onChangeText={(value) => setBellTime(value)} />
							<Text style={styles.text}>minute(s)</Text>
						</View>
						<View style={styles.bell_buttons}>
							<TouchableOpacity onPress={() => setShowBellModal(false)} style={styles.bell_cancel_button}>
								<Text style={styles.text}>Cancel</Text>
							</TouchableOpacity>
						<TouchableOpacity onPress={() => {
							setShowBellModal(false)
							setTaskAlarm()
							}} style={styles.bell_ok_button}>
								<Text style={styles.text}>OK</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
			<TextInput style={styles.input} placeholder='Title' value={title} onChangeText={(value) => setTitle(value)} />
			<TextInput style={styles.input} placeholder='Description' multiline value={description} onChangeText={(value) => setDescription(value)} />
			<View style={styles.color_bar}>
				<TouchableOpacity onPress={() => setColor('white')} style={styles.color_white}>
					{color === 'white' && <FontAwesome5Icon name="check" size={25} color="#000" />}
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setColor('red')} style={styles.color_red}>
					{color === 'red' && <FontAwesome5Icon name="check" size={25} color="#000" />}
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setColor('blue')} style={styles.color_blue}>
					{color === 'blue' && <FontAwesome5Icon name="check" size={25} color="#000" />}
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setColor('green')} style={styles.color_green}>
					{color === 'green' && <FontAwesome5Icon name="check" size={25} color="#000" />}
				</TouchableOpacity>
			</View>
			<View style={styles.extra_row}>
				<TouchableOpacity onPress={() => setShowBellModal(true)} style={styles.extra_button}>
					<FontAwesome5Icon name='bell' size={25} color={'#fff'} />
				</TouchableOpacity>
			</View>
			<View style={styles.checkbox}>
				<CheckBox value={done} onValueChange={(value) => setDone(value)} />
				<Text style={styles.text}>Is Done</Text>
			</View>
			<CustomButton title="Save Task" style={{ width: '100%', marginTop: 10 }} onPressHandler={handleTask} />
		</View>
	)
}

export default Task

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},
	checkbox: {
		flexDirection: 'row',
		margin: 10,
		alignItems: 'center'
	},
	input: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#555',
		borderRadius: 10,
		backgroundColor: '#fff',
		textAlign: 'left',
		fontSize: 20,
		margin: 10,
		padding: 10,
		height: 50,
		lineHeight: 20
	},
	text: {
		fontSize: 20,
		color: '#000',
		marginLeft: 10
	},
	color_bar: {
		flexDirection: 'row',
		height: 50,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: '#555',
		marginVertical: 10
	},
	color_white: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	},
	color_red: {
		flex: 1,
		backgroundColor: '#f28b82',
		justifyContent: 'center',
		alignItems: 'center'
	},
	color_blue: {
		flex: 1,
		backgroundColor: '#aecbfa',
		justifyContent: 'center',
		alignItems: 'center'
	},
	color_green: {
		flex: 1,
		backgroundColor: '#ccff90',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	},
	extra_row: {
		flexDirection: 'row',
		marginVertical: 10
	},
	extra_button: {
		flex: 1,
		height: 50,
		backgroundColor: '#0080ff',
		borderRadius: 10,
		marginHorizontal: 5,
		justifyContent:'center',
		alignItems: 'center'
	},
	centered_view: {
		flex: 1,
		backgroundColor: '00000099',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bell_modal: {
		width: 300,
		height: 200,
		backgroundColor: '#ffffff',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#000'
	},
	bell_body: {
		height: 150,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bell_buttons: {
		flexDirection: 'row',
		height: 50
	},
	bell_input: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderColor: '#555',
		borderRadius: 10,
		backgroundColor: '#fff',
		textAlign: 'center',
		fontSize: 20,
		margin: 10
	},
	bell_cancel_button: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#000',
		borderBottomLeftRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bell_ok_button: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#000',
		borderBottomRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
