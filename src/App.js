import React from 'react';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Screen_A" component={ScreenA} options={{ title: 'Screen A Title', drawerIcon: ({ focused }) => (<FontAwesome5 name="autoprefixer" size={focused ? 25 : 20} color={focused ? '#0080ff' : '#999999'} />) }} />
				<Drawer.Screen name="Screen_B" component={ScreenB} options={{ title: 'Screen B Title', drawerIcon: ({ focused }) => (<FontAwesome5 name="btc" size={focused ? 25 : 20} color={focused ? '#0080ff' : '#999999'} />) }} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
