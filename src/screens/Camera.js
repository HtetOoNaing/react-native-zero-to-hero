import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import CustomButton from '../utils/CustomButton'

const Camera = () => {

	const [{cameraRef}, {takePicture}] = useCamera(null)

	const handleCapture = async () => {
		try {
			const data = await takePicture();
			console.log(data.uri)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View style={styles.body}>
			<RNCamera ref={cameraRef} type={RNCamera.Constants.Type.back} style={styles.preview}>
				<CustomButton title="Capture" onPressHandler={() => handleCapture()} />
			</RNCamera>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1
	},
	preview: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	}
})

export default Camera
