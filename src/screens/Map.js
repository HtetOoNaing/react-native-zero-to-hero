import React from 'react'
import GlobalStyle from '../utils/GlobalStyle';
import { StyleSheet, Text, View } from 'react-native'

const Map = ({ route }) => {
	const { city } = route.params;
	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>{city}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20
	},
	text: {
		fontSize: 40,
		fontFamily: 'DancingScript-Regular'
	},
})

export default Map
