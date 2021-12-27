import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'


const Splash = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('My Tasks')
		}, 2000)
	}, [])
	return (
		<View style={styles.body}>
			<Image style={styles.logo} source={require('../../assets/volkswagen.png')} />
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Mash To-Do List</Text>
		</View> 
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0080ff'
	},
	logo: {
		width: 100,
		height: 100,
		marginTop: 50,
		marginBottom: 20
	},
	text: {
		fontSize: 35,
		color: '#fff'
	}
})

export default Splash
