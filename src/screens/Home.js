import React, { useEffect, useState } from 'react'
import {
	Alert,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButton';
import sqlite from 'react-native-sqlite-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setName, increaseAge, getCities } from '../redux/actions';
import { handleRemoveNoti, handleScheduleNotification, showNotification } from '../notification.ios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const db = sqlite.openDatabase({
	name: 'MainDB',
	location: 'default'
},
	() => { },
	error => { console.log(error) }
)


const Home = ({ navigation }) => {

	const dispatch = useDispatch()
	const { name, age, cities } = useSelector(state => state.userReducer)

	// const [name, setName] = useState('')
	// const [age, setAge] = useState('')

	useEffect(() => {
		getName()
		dispatch(getCities())
	}, [])

	const getName = () => {
		try {
			// AsyncStorage.getItem('Username').then(name => {
			// 	if(name !== null) {
			// 		setName(name)
			// 	}
			// })
			db.transaction((tx) => {
				tx.executeSql(
					"SELECT Name, Age FROM Users",
					[],
					(tx, results) => {
						let len = results.rows.length;
						if (len > 0) {
							let userName = results.rows.item(0).Name;
							let userAge = results.rows.item(0).Age;
							// setName(userName)
							// setAge(userAge)
							dispatch(setName(userName))
							dispatch(setAge(userAge))
						}
					}
				)
			})
		} catch (error) {
			console.log(error)
		}
	}

	const updateName = async () => {
		if (name.length === 0) {
			Alert.alert('Warning!', 'Please enter your name.')
		} else {
			try {
				// await AsyncStorage.setItem('Username', name);
				await db.transaction((tx) => {
					tx.executeSql(
						"UPDATE Users SET Name=?",
						[name],
						() => { Alert.alert('Success!', 'Your name has been updated.') },
						error => { console.log(error) }
					)
				})
			} catch (error) {
				console.log(error)
			}
		}
	}

	const removeUser = async () => {
		try {
			await db.transaction((tx) => {
				tx.executeSql(
					"DELETE FROM Users",
					[],
					() => { navigation.navigate('Login') },
					error => { console.log(error) }
				)
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Welcome {name} !</Text>

			<FlatList data={cities} renderItem={({ item }) => (
				<TouchableOpacity onPress={() => {
					showNotification(item.country, item.city)
					navigation.navigate('Map', {
						city: item.city,
						lat: item.lat,
						lng: item.lng
					})
				} }>
					<View style={styles.item}>
						<Text style={styles.title}>{item.country}</Text>
						<Text style={styles.subtitle}>{item.city}</Text>
					</View>
				</TouchableOpacity>
			)} keyExtractor={(item, index) => index.toString()} />
			{/* <Text style={[styles.text, GlobalStyle.CustomFont]}>Your age is {age} !</Text>
			<TextInput value={name} placeholder="Enter your name" onChangeText={(value) => dispatch(setName(value))} style={[styles.input, styles.mtForm]} /> */}
			{/* <TextInput value={`${age}`} placeholder="Enter your age" onChangeText={(value) => setAge(value)} style={[styles.input, styles.mt20]} /> */}
			{/* <CustomButton title="Update" onPressHandler={updateName} style={styles.mt20} />
			<CustomButton title="Remove" onPressHandler={removeUser} style={styles.removeBtn} />
			<CustomButton title="Increase Age" onPressHandler={() => dispatch(increaseAge())} style={styles.increaseBtn} /> */}
			<CustomButton title="Noti 5s" onPressHandler={() => handleScheduleNotification('Notification', 'This noti will come after 5s')} style={styles.increaseBtn} /> 
			<CustomButton title="Remove all noti" onPressHandler={handleRemoveNoti} style={styles.removeBtn} />
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 40,
		fontFamily: 'DancingScript-Regular'
	},
	mt20: {
		marginTop: 20
	},
	input: {
		width: 300,
		borderWidth: 1,
		borderColor: '#555',
		borderRadius: 10,
		backgroundColor: '#fff',
		textAlign: 'center',
		fontSize: 20,
		marginVertical: 10,
		padding: 10,
	},
	mtForm: {
		marginTop: 150
	},
	removeBtn: {
		backgroundColor: '#f40100',
		marginTop: 20,
	},
	increaseBtn: {
		backgroundColor: '#0080ff',
		marginTop: 20
	},
	item: {
		backgroundColor: '#fff',
		borderWidth: 2,
		borderColor: '#ccc',
		borderRadius: 5,
		margin: 7,
		width: 350,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 30,
		margin: 10,
		marginTop: 20
	},
	subtitle: {
		fontSize: 20,
		marginBottom: 20,
		color: '#999'
	}
});

export default Home;