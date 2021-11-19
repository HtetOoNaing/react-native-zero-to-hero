/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const App = () => {
	return (
		<View style={styles.body}>
			<View style={[styles.view123Container, styles.flexRow]}>
				<View style={[styles.view1, styles.center]}>
					<Text style={styles.text}>1</Text>
				</View>
				<View style={[styles.view2, styles.center]}>
					<Text style={styles.text}>2</Text>
				</View>
				<View style={[styles.view3, styles.center]}>
					<Text style={styles.text}>3</Text>
				</View>
			</View>
			<View style={[styles.view4, styles.center]}>
				<Text style={styles.text}>4</Text>
			</View>
			<View style={[styles.view5, styles.center]}>
				<Text style={styles.text}>5</Text>
			</View>
			<View style={[styles.view67Container, styles.flexRow]}>
				<View style={[styles.view6, styles.center]}>
					<Text style={styles.text}>6</Text>
				</View>
				<View style={[styles.view7, styles.center]}>
					<Text style={styles.text}>7</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		marginTop: 40
	},
	view123Container: {
		height: 65,
	},
	view1: {
		flex: 1,
		backgroundColor: 'cyan',
	},
	view2: {
		flex: 2,
		backgroundColor: 'pink',
	},
	view3: {
		flex: 3,
		backgroundColor: 'yellow',
	},
	view4: {
		backgroundColor: 'red',
		height: 65,
	},
	view5: {
		backgroundColor: 'green',
		height: 65,
	},
	view67Container: {
		flex: 1,
	},
	view6: {
		flex: 1,
		backgroundColor: 'white',
	},
	view7: {
		flex: 1,
		backgroundColor: 'blue',
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row'
	},
	text: {
		fontSize: 30,
		fontWeight: '500',
		fontStyle: 'italic'
	}
});

export default App;
