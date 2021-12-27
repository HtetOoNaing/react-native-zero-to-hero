import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const Splash = () => {
	return (
		<View style={styles.body}>
			<Image style={styles.logo} source={require('../../assets/volkswagen.png')} />
			<Text style={styles.text}>Mash To-Do List</Text>
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
	}
})

export default Splash
