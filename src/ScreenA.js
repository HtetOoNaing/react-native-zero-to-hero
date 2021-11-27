import React from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import CustomButton from './CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenA = ({ navigation }) => {
	const onPressHandler = () => {
		navigation.navigate('Screen_B')
	}
	return (
		<View style={styles.body}>
			<Text style={styles.text}>Screen A</Text>
			<CustomButton title="Go to Screen B" onPressHandler={onPressHandler} />
			<View style={styles.iconContainer}>
            <Text>
              <Icon name="rocket" size={30} color="#900" />
            </Text>
          </View>
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
	}
});

export default ScreenA;