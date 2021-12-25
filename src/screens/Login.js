import React, { useState, useEffect } from 'react'
import CustomButton from '../utils/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'

const Login = ({ navigation }) => {
	const [name, setName] = useState('');

	useEffect(() => {
		getName()
	}, [])

	const getName = () => {
		try {
			AsyncStorage.getItem('Username').then(name => {
				if(name !== null) {
					navigation.navigate('Home')
				}
			})
		} catch (error) {
			console.log(error)
		}
	}

	const handlePress = async () => {
		if (name.length === 0) {
			Alert.alert('Warning!', 'Please enter your name.')
		} else {
			try {
				await AsyncStorage.setItem('Username', name);
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
			<TextInput style={styles.input} placeholder='Enter your name' onChangeText={(value) => setName(value)} />
			<CustomButton title="Login" color="#1eb900" onPressHandler={handlePress} />
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
		marginTop: 130,
		marginBottom: 10,
		padding: 10,
	}
})

export default Login
