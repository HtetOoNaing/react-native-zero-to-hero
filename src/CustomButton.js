import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPressHandler, title, style }) => {
	return (
		<TouchableOpacity onPress={onPressHandler} style={[styles.button, {...style}]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	text: {
		color: '#000',
		fontSize: 20,
		margin: 5,
		textAlign: 'center'
	},
	button: {
		backgroundColor: '#00ff00',
		borderRadius: 4,
		padding: 10
	},
})

export default CustomButton;