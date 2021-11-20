/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	Button,
	FlatList,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
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
		<Button title={submitted ? "Clear" : "Submit"} color="#00f" onPress={onPressHandler} />
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
	}
});

export default App;
