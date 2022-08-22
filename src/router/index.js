import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Wallpapers } from './src/screens';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Router
				initialRouteName='home'
				screenOptions={ { headerShown: false } }
			>
				<Stack.Screen name="home" component={ Home } />
				<Stack.Screen name="wallpapers" component={ Wallpapers } />
			</Stack.Router>
		</NavigationContainer>
	);
};

export default MainRouter;