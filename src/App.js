import React from 'react';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
		<Tab.Navigator screenOptions={({route}) => ({
			tabBarIcon: ({focused, size, color}) => {
				let iconName;
				if(route.name === 'Screen_A') {
					iconName = "autoprefixer"
				} else if (route.name === 'Screen_B') {
					iconName = "btc"
				}
				return <FontAwesome name={iconName} size={focused ? 25 : 20} color={focused ? '#f0f' : '#555'} />
			}
		})}>
				<Tab.Screen name="Screen_A" component={ScreenA} />
				<Tab.Screen name="Screen_B" component={ScreenB} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
