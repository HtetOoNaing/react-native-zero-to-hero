import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import CustomButton from './CustomButton';

const ScreenB = ({ navigation }) => {
	const onPressHandler = () => {
		// navigation.navigate('Screen_A')
		navigation.goBack();
	}
	return (
		<View style={styles.body}>
			<Text style={styles.text}>Screen B</Text>
			<CustomButton title="Go back to Screen A" onPressHandler={onPressHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 40,
		fontWeight: 'bold',
	}
});

export default ScreenB;