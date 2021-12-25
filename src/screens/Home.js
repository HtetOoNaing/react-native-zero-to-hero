import React, { useEffect, useState } from 'react'
import {
	Alert,
	StyleSheet,
	Text,
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

	// const updateName = async () => {
	// 	if (name.length === 0) {
	// 		Alert.alert('Warning!', 'Please enter your name.')
	// 	} else {
	// 		try {
	// 			await AsyncStorage.setItem('Username', name);
	// 			Alert.alert('Success!', 'Your name has been updated.')
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// }

	const onPressHandler = () => {
		navigation.navigate('Screen_B')
	}
	const toggleDrawer = () => {
		// navigation.openDrawer();
		navigation.toggleDrawer();
	}
	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Welcome {name} !</Text>
			<CustomButton title="Go to Screen B" onPressHandler={onPressHandler} style={styles.mt20} />
			<CustomButton title="Toggle Drawer" onPressHandler={toggleDrawer} style={styles.mt20} />
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 40,
		fontFamily: 'DancingScript-Regular'
	},
	mt20: {
		marginTop: 20
	}
});

export default Home;