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
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const App = () => {

	const [name, setName] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const [showWarning, setShowWarning] = useState(false)
	const onPressHandler = () => {
		if(name.length > 3) {
			setSubmitted(!submitted);
		} else {
			setShowWarning(true)
		}
	}
	return (
		<View style={styles.body}>
			<Modal animationType="slide" visible={showWarning} transparent={true} onRequestClose={() => setShowWarning(false)}>
				<View style={styles.centered_view}>
					<View style={styles.warning_modal}>
						<View style={styles.warning_title}>
							<Text style={styles.text}>WARNING!</Text>
						</View>
						<View style={styles.warning_body}>
							<Text style={styles.text}>The name must be longer than 3 characters</Text>
						</View>
						<Pressable onPress={() => setShowWarning(false)}><Text style={styles.text}>OK</Text></Pressable>
					</View>
				</View>
			</Modal>
			<Text style={styles.text}>
				Please write your name: 
			</Text>
			<TextInput style={styles.input} placeholder="e.g John Doe" onChangeText={(value) => setName(value)} />
			<TouchableOpacity onPress={onPressHandler} style={styles.button}>
				<Text style={styles.text_white}>{submitted ? "Clear" : "Submit"}</Text>
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
		margin: 10,
		textAlign: 'center'
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
	text_white: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16
	},
	centered_view: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000099'
	},
	warning_modal: {
		width: 300,
		height: 300,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 20
	},
	warning_title: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ff0',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20
	},
	warning_body: {
		height: 200,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default App;
