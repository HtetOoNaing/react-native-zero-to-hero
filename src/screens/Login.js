import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from '../utils/CustomButton'

const Login = () => {
	return (
		<View style={styles.body}>
			<Image style={styles.logo} source={require('../../assets/volkswagen.png')} />
			<Text style={styles.text}>Async Storage</Text>
			<TextInput style={styles.input} placeholder='Enter your name' />
			<CustomButton title="Login" color="#1eb900" />
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
