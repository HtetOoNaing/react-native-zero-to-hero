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
	Image,
	ImageBackground,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import CustomButton from './CustomButton';
import Header from './Header';

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
		<ImageBackground source={{uri: 'https://images.unsplash.com/photo-1637320116287-afb702acb49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'}} style={styles.body}>
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
			<Header />
			<Text style={styles.text}>
				Please write your name: 
			</Text>
			<TextInput style={styles.input} placeholder="e.g John Doe" onChangeText={(value) => setName(value)} />

			<CustomButton onPressHandler={onPressHandler} title={submitted ? "Clear" : "Submit"} style={{margin: 20}} />
			<CustomButton onPressHandler={() => Alert.alert('TESTING', 'Hey there!', [{text: 'see ya'}])} title="Testing Button" style={{marginBottom: 30}} />

			{submitted ? (
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Text style={styles.text}>You are submitted as : {name}</Text>
					<Image source={require('./assets/volkswagen.png')} style={styles.image} />
				</View>
			) : (
				<Image source={require('./assets/skoda.png')} style={styles.image} />
			)}
			<Image style={styles.image} source={{uri: 'https://images.hgmsites.net/lrg/mercedes-benz-historical-logos_100711609_l.jpg'}} />
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
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
	},
	image: {
		width: 100,
		height: 100,
		margin: 10
	}
});

export default App;
