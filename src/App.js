import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import CustomButton from './CustomButton';

const Stack = createStackNavigator()

const ScreenA = ({navigation}) => {
	const onPressHandler = () => {
		navigation.navigate('Screen_B')
	}
	return (
		<View style={styles.body}>
			<Text style={styles.text}>Screen A</Text>
			<CustomButton title="Go to Screen B" onPressHandler={onPressHandler} />
		</View>
	)
}
const ScreenB = ({navigation}) => {
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

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Screen_A" component={ScreenA} />
				<Stack.Screen name="Screen_B" component={ScreenB} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

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

export default App;
