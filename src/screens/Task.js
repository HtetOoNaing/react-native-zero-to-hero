import AsyncStorageLib from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setTasks } from '../redux/actions'
import CustomButton from '../utils/CustomButton'

const Task = ({ navigation }) => {

	const { tasks, taskID } = useSelector(state => state.userReducer)
	const dispatch = useDispatch()

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		getTask()
	}, [])

	const getTask = () => {
		const Task = tasks.find(task => task.ID === taskID);
		if(Task) {
			setTitle(Task.Title);
			setDescription(Task.Description);
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
					Description: description
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

	return (
		<View style={styles.body}>
			<TextInput style={styles.input} placeholder='Title' value={title} onChangeText={(value) => setTitle(value)} />
			<TextInput style={styles.input} placeholder='Description' multiline value={description} onChangeText={(value) => setDescription(value)} />
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
	}
})
