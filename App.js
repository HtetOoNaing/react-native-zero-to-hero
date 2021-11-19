/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	FlatList,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const App = () => {
	const [items, setItems] = useState([
		{ name: 'Item 1' },
		{ name: 'Item 2' },
		{ name: 'Item 3' },
		{ name: 'Item 4' },
		{ name: 'Item 5' },
		{ name: 'Item 6' },
		{ name: 'Item 7' },
		{ name: 'Item 8' },
		{ name: 'Item 9' },
		{ name: 'Item 10' },
	])
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		setItems([...items, { name: `Item ${items.length + 1}` }]);
		setRefreshing(false);
	}

	return (
		<View style={styles.body}>
			<FlatList keyExtractor={(item, index) => index.toString()} data={items} renderItem={({item}) => (
				<View key={item.key} style={styles.item}>
					<Text style={styles.text}>{item.name}</Text>
				</View>
			)}
			refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#ff00ff']} />} />
			{/* <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#ff00ff']} />}>
				{items.map(item => (
					<View key={item.key} style={styles.item}>
						<Text style={styles.text}>{item.name}</Text>
					</View>
				))}
			</ScrollView> */}
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
