import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import 'react-native-gesture-handler';
import { Store } from './redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
