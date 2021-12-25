import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import GlobalStyle from '../utils/GlobalStyle';

const ScreenB = ({ navigation, route }) => {

	const { ItemName, ItemId } = route.params

	const onPressHandler = () => {
		// navigation.navigate('Screen_A')
		navigation.goBack();
	}
	const onUpdateParams = () => {
		navigation.setParams({ ItemId: 14 })
	}

	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>Screen B</Text>
			<CustomButton title="Go back to Screen A" onPressHandler={onPressHandler} />
			<CustomButton title="Update Params" onPressHandler={onUpdateParams} style={styles.mt10} />

			<Text style={styles.text}>{ItemName}</Text>
			<Text style={styles.text}>{ItemId}</Text>
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
	},
	mt10: {
		marginTop: 10
	}
});

export default ScreenB;