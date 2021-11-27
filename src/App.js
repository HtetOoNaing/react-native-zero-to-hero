import React from 'react';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Screen_A" component={ScreenA} />
				<Tab.Screen name="Screen_B" component={ScreenB} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
