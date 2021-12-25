import React from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import GlobalStyle from '../utils/GlobalStyle';

const Home = ({ navigation }) => {
	const onPressHandler = () => {
		navigation.navigate('Screen_B')
	}
	const toggleDrawer = () => {
		// navigation.openDrawer();
		navigation.toggleDrawer();
	}
	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Screen A</Text>
			<CustomButton title="Go to Screen B" onPressHandler={onPressHandler} />
			<CustomButton title="Toggle Drawer" onPressHandler={toggleDrawer} style={styles.mt20} />
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
		fontFamily: 'DancingScript-Regular'
	},
	mt20: {
		marginTop: 20
	}
});

export default Home;