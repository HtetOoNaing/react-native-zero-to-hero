import React from 'react'
import MapView from 'react-native-maps';
import GlobalStyle from '../utils/GlobalStyle';
import { StyleSheet, Text, View } from 'react-native'

const Map = ({ route }) => {
	const { city, lat, lng } = route.params;
	return (
		<View style={styles.body}>
			<Text style={[styles.text, GlobalStyle.CustomFont]}>{city}</Text>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
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
	map: {
		width: '100%',
		height: '100%'
	}
})

export default Map
