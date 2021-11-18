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
			<Text style={styles.text}>Zero To Hero</Text>
		</View>
  );
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#000',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
  },
	text: {
		// color: '#fff',
		fontSize: 25,
		fontStyle: 'italic'
	}
});

export default App;
