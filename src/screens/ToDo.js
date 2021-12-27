import AsyncStorageLib from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
			if(parsedTasks && typeof parsedTasks === 'object') {
				dispatch(setTasks(parsedTasks))
			}
		}).catch(err => console.log(err))
	}

	return (
		<View style={styles.body}>
			<FlatList data={tasks} renderItem={({item}) => (
				<TouchableOpacity onPress={() => {
					dispatch(setTaskID(item.ID))
					navigation.navigate('Task')
				}} style={styles.item}>
					<Text style={[styles.title, GlobalStyle.CustomFont]} numberOfLines={1}>{item.Title}</Text>
					<Text style={styles.subtitle} numberOfLines={1}>{item.Description}</Text>
				</TouchableOpacity>
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
	item: {
		marginHorizontal: 10,
		marginVertical: 7,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderRadius: 10,
		elevation: 5
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
	}
})

export default ToDo
