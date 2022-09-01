import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Navigation } from '../helpers';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Wallpapers from '../screens/Wallpapers';
import ImageFolder from '../screens/ImageFolder';
import Ringtones from '../screens/Ringtones';
import Homescreen from '../screens/Homescreen';
import Frame from '../screens/Frame';

const Stack = createNativeStackNavigator();

const Router = () => {
	return (
		<NavigationContainer ref={ Navigation.navigationRef }>
			<Stack.Navigator
				screenOptions={ {
					headerShown: false,
				} }>
				<Stack.Screen name='Home' component={ Home } />
				<Stack.Screen name='Detail' component={ Detail } />
				{ /*  */ }
				<Stack.Screen name='Wallpapers' component={ Wallpapers } />
				<Stack.Screen name='ImageFolder' component={ ImageFolder } />
				<Stack.Screen name='Ringtones' component={ Ringtones } />
				<Stack.Screen name='Homescreen' component={ Homescreen } />
				<Stack.Screen name='Frame' component={ Frame } />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
