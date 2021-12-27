import AsyncStorageLib from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskID, setTasks } from '../redux/actions'

const ToDo = ({ navigation }) => {
	const { tasks } = useSelector(state => state.userReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		getTasks()
	}, [])

	const getTasks = () => {
		AsyncStorageLib.getItem('Tasks').then(tasks => {
			const parsedTasks = JSON.parse(tasks)
			if(parsedTasks && typeof parsedTasks === 'object') {
				dispatch(setTasks(parsedTasks))
			}
		}).catch(err => console.log(err))
	}

	return (
		<View style={styles.body}>
			<TouchableOpacity onPress={() => {
				dispatch(setTaskID(tasks.length + 1))
				navigation.navigate('Task')
			}} style={styles.button}>
				<FontAwesome5Icon name='plus' size={20} color="#fff" />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#0080ff',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 10,
		right: 10,
		elevation: 5
	}
})

export default ToDo
