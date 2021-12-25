import React, { useState, useEffect } from 'react'
import CustomButton from '../utils/CustomButton'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import sqlite from 'react-native-sqlite-storage';
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'

const db = sqlite.openDatabase({
	name: 'MainDB',
	location: 'default'
},
	() => { },
	error => { console.log(error) }
)

const Login = ({ navigation }) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');

	useEffect(() => {
		createTable()
		getName()
	}, [])

	const createTable = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS " +
				"Users" +
				"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
			)
		})
	}

	const getName = () => {
		try {
			// AsyncStorage.getItem('Username').then(name => {
			// 	if (name !== null) {
			// 		navigation.navigate('Home')
			// 	}
			// })

			db.transaction((tx) => {
				tx.executeSql(
					"SELECT Name, Age FROM Users",
					[],
					(tx, results) => {
						let len = results.rows.length;
						if(len > 0) {
							navigation.navigate('Home')
						}
					}
				)
			})

		} catch (error) {
			console.log(error)
		}
	}

	const handlePress = async () => {
		if (name.length === 0 || age.length === 0) {
			Alert.alert('Warning!', 'Please enter your name.')
		} else {
			try {
				// await AsyncStorage.setItem('Username', name);
				await db.transaction(async (tx) => {
					// await tx.executeSql(
					// 	"INSERT INTO Users (Name, Age) VALUES ( '"+ name +"', '"+ age +"' )"
					// )
					await tx.executeSql(
						"INSERT INTO Users (Name, Age) VALUES ( ?, ? )", [name, age]
					)
				})
				navigation.navigate('Home')
			} catch (err) {
				console.log(err)
			}
		}
	}
	return (
		<View style={styles.body}>
			<Image style={styles.logo} source={require('../../assets/volkswagen.png')} />
			<Text style={styles.text}>Async Storage</Text>
			<TextInput style={[styles.input, styles.mtForm]} placeholder='Enter your name' onChangeText={(value) => setName(value)} />
			<TextInput style={styles.input} placeholder='Enter your age' onChangeText={(value) => setAge(value)} />
			<CustomButton title="Login" color="#1eb900" onPressHandler={handlePress} style={styles.mt10} />
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#0080ff'
	},
	logo: {
		width: 100,
		height: 100,
		marginTop: 50,
		marginBottom: 20
	},
	text: {
		fontSize: 25,
		color: '#fff'
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
		marginTop: 130
	},
	mt10: {
		marginTop: 10
	}
})

export default Login
