import React from 'react';
import Map from './screens/Map';
import Home from './screens/Home';
import Login from './screens/Login';
import Camera from './screens/Camera';
import Splash from './screens/Splash';
import ToDo from './screens/ToDo';
import Done from './screens/Done';
import 'react-native-gesture-handler';
import { Store } from './redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

function HomeTabs() {
	return (<Tab.Navigator 
		screenOptions={({ route }) => ({
		tabBarIcon: ({ focused, size, color }) => {
			let iconName;
			if (route.name === 'ToDo') {
				iconName = 'clipboard-list'
				size = focused ? 25 : 20
			} else if (route.name === 'Done') {
				iconName = 'clipboard-check'
				size = focused ? 25 : 20
			}
			return (<Icon name={iconName} size={size} color={color} />)
		},
		tabBarActiveTintColor: '#0080ff',
    tabBarInactiveTintColor: '#777',
		tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' }
	})}
	>
		<Tab.Screen name="ToDo" component={ToDo} />
		<Tab.Screen name="Done" component={Done} />
	</Tab.Navigator>)
}

const RootStack = createStackNavigator();

const App = () => {
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<RootStack.Navigator>
					<RootStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
					<RootStack.Screen name="My Tasks" component={HomeTabs} />
					<RootStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
					<RootStack.Screen name="Home" component={Home} />
				</RootStack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
