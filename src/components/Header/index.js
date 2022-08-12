import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Style from './style';

const Header = () => {
	return (
		<View style={ Style.header }>

			<TouchableOpacity style={ Style.leftButtonHeader } onPress={ null }>
				<Ionicons name="ios-aperture-outline" size={ 25 } />
			</TouchableOpacity>

			<Text style={ Style.title }>Tutorial React Native</Text>

			<TouchableOpacity style={ Style.rightButtonHeader } onPress={ null }>
				<Ionicons name="ellipsis-horizontal-sharp" size={ 25 } />
			</TouchableOpacity>

		</View>
	);
};

export default Header;