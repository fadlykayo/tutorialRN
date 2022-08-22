import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Style from './style';

const Header = ({
	headerContainer,
	leftIconContainer,
	onPressLeftIcon = null,
	leftIcon = 'ios-aperture-outline',
	leftIconSize = 25,
	title = '',
	rightIconContainer,
	onPressRightIcon = null,
	rightIcon = 'ellipsis-horizontal-sharp',
	rightIconSize = 25,
}) => {
	return (
		<View style={ [Style.header, headerContainer] }>

			<TouchableOpacity style={ [Style.leftButtonHeader, leftIconContainer] } onPress={ onPressLeftIcon }>
				<Ionicons name={ leftIcon } size={ leftIconSize } />
			</TouchableOpacity>

			<Text style={ Style.title }>{ title }</Text>

			<TouchableOpacity style={ [Style.rightButtonHeader, rightIconContainer] } onPress={ onPressRightIcon }>
				<Ionicons name={ rightIcon } size={ rightIconSize } />
			</TouchableOpacity>

		</View>
	);
};

export default Header;