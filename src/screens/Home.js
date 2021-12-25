import React, { useEffect, useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {

	const [name, setName] = useState('')

	useEffect(() => {
		getName()
	}, [])

	const getName = () => {
		try {
			AsyncStorage.getItem('Username').then(name => {
				if(name !== null) {
					setName(name)
				}
			})
		} catch (error) {
			console.log(error)
		}
	}

	const onPressHandler = () => {
		navigation.navigate('Screen_B')
	}
	const toggleDrawer = () => {
		// navigation.openDrawer();
		navigation.toggleDrawer();
	}
	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Welcome {name} !</Text>
			<CustomButton title="Go to Screen B" onPressHandler={onPressHandler} style={styles.mt20} />
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