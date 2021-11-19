/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const App = () => {
	const [items, setItems] = useState([
		{ key: 1, name: 'Item 1' },
		{ key: 2, name: 'Item 2' },
		{ key: 3, name: 'Item 3' },
		{ key: 4, name: 'Item 4' },
		{ key: 5, name: 'Item 5' },
		{ key: 6, name: 'Item 6' },
		{ key: 7, name: 'Item 7' },
		{ key: 8, name: 'Item 8' },
		{ key: 9, name: 'Item 9' },
		{ key: 10, name: 'Item 10' },
	])
	return (
		<View style={styles.body}>
			<ScrollView>
				{items.map(item => (
					<View key={item.key} style={styles.item}>
						<Text style={styles.text}>{item.name}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		marginTop: 35
	},
	item: {
		backgroundColor: '#4ae1fa',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10
	},
	text: {
		color: '#000',
		fontSize: 45,
		fontStyle: 'italic',
		margin: 10
	}
});

export default App;
