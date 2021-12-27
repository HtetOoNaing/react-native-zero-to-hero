import AsyncStorageLib from '@react-native-async-storage/async-storage'
import CheckBox from '@react-native-community/checkbox'
import React, { useEffect } from 'react'
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskID, setTasks } from '../redux/actions'
import GlobalStyle from '../utils/GlobalStyle'

const ToDo = ({ navigation }) => {
	const { tasks } = useSelector(state => state.userReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		getTasks()
	}, [])

	const getTasks = () => {
		AsyncStorageLib.getItem('Tasks').then(tasks => {
			const parsedTasks = JSON.parse(tasks)
			if (parsedTasks && typeof parsedTasks === 'object') {
				dispatch(setTasks(parsedTasks))
			}
		}).catch(err => console.log(err))
	}

	const deleteTask = (id) => {
		const filteredTasks = tasks.filter(task => task.ID !== id);
		AsyncStorageLib.setItem('Tasks', JSON.stringify(filteredTasks)).then(() => {
			dispatch(setTasks(filteredTasks));
			Alert.alert('Success!', 'Task removed successfully.')
		}).catch(err => console.log(err))
	}

	const checkTask = (id, newValue) => {
		const index = tasks.findIndex(task => task.ID === id);
		if (index > -1) {
			let newTasks = [...tasks];
			newTasks[index].Done = newValue
			AsyncStorageLib.setItem('Tasks', JSON.stringify(newTasks)).then(() => {
				dispatch(setTasks(newTasks));
				Alert.alert('Success!', 'Task state is changed.')
			}).catch(err => console.log(err))
		}
	}

	return (
		<View style={styles.body}>
			<FlatList data={tasks.filter(task => !task.Done)} renderItem={({ item }) => (
				<View style={styles.item_row}>
					<View style={[
						{
							backgroundColor: item.Color === 'red' ? '#f28b82' : item.Color === 'blue' ? '#aecbfa' : item.Color === 'green' ? '#ccff90' : '#fff'
						},
						styles.color
						]} />
					<CheckBox value={item.Done} onValueChange={(newValue) => checkTask(item.ID, newValue)} />
					<TouchableOpacity onPress={() => {
						dispatch(setTaskID(item.ID))
						navigation.navigate('Task')
					}} style={styles.item}>
						<Text style={[styles.title, GlobalStyle.CustomFont]} numberOfLines={1}>{item.Title}</Text>
						<Text style={styles.subtitle} numberOfLines={1}>{item.Description}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => deleteTask(item.ID)} style={styles.delete}><FontAwesome5Icon name="trash" size={25} color="#ff3636" /></TouchableOpacity>
				</View>
			)} keyExtractor={(item, index) => index.toString()} />
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
	},
	item_row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 10,
		marginVertical: 7,
		paddingRight: 10,
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderRadius: 10,
		elevation: 5
	},
	item: {
		flex: 1,
		marginLeft: 10
	},
	title: {
		color: '#000',
		fontSize: 30,
		margin: 5
	},
	subtitle: {
		color: '#999',
		fontSize: 20,
		margin: 5
	},
	delete: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	color: {
		width: 20,
		height: 100,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		marginRight: 5
	}
})

export default ToDo
