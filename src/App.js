import React from 'react';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator screenOptions={{ drawerPosition: 'right' }}>
				<Drawer.Screen name="Screen_A" component={ScreenA} />
				<Drawer.Screen name="Screen_B" component={ScreenB} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
