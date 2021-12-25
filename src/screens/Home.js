import React, { useEffect, useState } from 'react'
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButton';
import sqlite from 'react-native-sqlite-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const db = sqlite.openDatabase({
	name: 'MainDB',
	location: 'default'
},
	() => { },
	error => { console.log(error) }
)


const Home = ({ navigation }) => {

	const [name, setName] = useState('')
	const [age, setAge] = useState('')

	useEffect(() => {
		getName()
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
						if(len > 0) {
							let userName = results.rows.item(0).Name;
							let userAge = results.rows.item(0).Age;
							setName(userName)
							setAge(userAge)
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

	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Welcome {name} !</Text>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Your age is {age} !</Text>
			<TextInput value={name} placeholder="Enter your name" onChangeText={(value) => setName(value)} style={[styles.input, styles.mtForm]} />
			{/* <TextInput value={`${age}`} placeholder="Enter your age" onChangeText={(value) => setAge(value)} style={[styles.input, styles.mt20]} /> */}
			<CustomButton title="Update" onPressHandler={updateName} style={styles.mt20} />
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		marginTop: 40,
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
});

export default Home;