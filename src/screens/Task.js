import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import CustomButton from '../utils/CustomButton'

const Task = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	return (
		<View style={styles.body}>
			<TextInput style={styles.input} placeholder='Title' value={title} onPressHandler={(value) => setTitle(value)} />
			<TextInput style={styles.input} placeholder='Description' multiline value={description} onPressHandler={(value) => setDescription(value)} />
			<CustomButton title="Save Task" style={{ width: '100%', marginTop: 10 }} />
		</View>
	)
}

export default Task

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},
	input: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#555',
		borderRadius: 10,
		backgroundColor: '#fff',
		textAlign: 'left',
		fontSize: 20,
		margin: 10,
		padding: 10,
		height: 50,
		lineHeight: 20
	}
})
