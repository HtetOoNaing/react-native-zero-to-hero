import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const ToDo = () => {
	return (
		<View style={styles.body}>
			<TouchableOpacity style={styles.button}>
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
	}
})

export default ToDo
