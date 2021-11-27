import React from 'react';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Screen_A" component={ScreenA} options={{ title: 'Screen A Title'}} />
				<Drawer.Screen name="Screen_B" component={ScreenB} options={{ title: 'Screen B Title'}} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
