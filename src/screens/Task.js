import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Task = () => {
	return (
		<View style={styles.body}>
			<Text>Task</Text>
		</View>
	)
}

export default Task

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	}
})
