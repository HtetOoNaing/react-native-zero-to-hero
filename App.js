/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const App = () => {

	const [name, setName] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const onPressHandler = () => {
		if(name.length > 3) {
			setSubmitted(!submitted);
		} else {
			Alert.alert('Warning', 'The name must be longer than 3 characters', [
				{text: 'OK', onPress: () => console.warn('OK Pressed!'), style: 'cancel'},
				{text: 'OK', onPress: () => console.warn('OK Pressed!'), style: 'default'},
				{text: 'OK', onPress: () => console.warn('OK Pressed!'), style: 'destructive'},
			])
		}
	}
	return (
		<View style={styles.body}>
			<Text style={styles.text}>
				Please write your name: 
			</Text>
			<TextInput style={styles.input} placeholder="e.g John Doe" onChangeText={(value) => setName(value)} />
			<TouchableOpacity onPress={onPressHandler} style={styles.button}>
				<Text style={styles.textWhite}>{submitted ? "Clear" : "Submit"}</Text>
			</TouchableOpacity>
			{submitted && (
				<Text style={styles.text}>You are submitted as : {name}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		marginTop: 35
	},
	text: {
		color: '#000',
		fontSize: 20,
		margin: 10
	},
	input: {
		width: 200,
		borderWidth: 1,
		borderColor: '#555',
		borderRadius: 5,
		padding: 10,
	},
	button: {
		marginTop: 20,
		backgroundColor: '#00ff00',
		borderRadius: 4,
		padding: 10
	},
	textWhite: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16
	}
});

export default App;
