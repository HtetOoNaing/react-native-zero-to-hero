/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

const App = () => {

	const [name, setName] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const onPressHandler = () => {
		setSubmitted(!submitted);
	}
	return (
		<View style={styles.body}>
			<Text style={styles.text}>
				Please write your name: 
			</Text>
			<TextInput style={styles.input} placeholder="e.g John Doe" onChangeText={(value) => setName(value)} />
			{/* <Button title={submitted ? "Clear" : "Submit"} color="#00f" onPress={onPressHandler} /> */}
			<TouchableHighlight onPress={onPressHandler} style={styles.button} activeOpacity={0.5} underlayColor="#fff">
				<Text style={styles.textWhite}>{submitted ? "Clear" : "Submit"}</Text>
			</TouchableHighlight>
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
