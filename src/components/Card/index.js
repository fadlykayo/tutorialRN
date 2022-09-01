import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Style from './style';

const Card = ({ Icon, text, backgroundColor, onPress }) => {
	return (
		<TouchableOpacity
			onPress={ () => {
				onPress && onPress();
			} }>
			<View style={ [Style.container, { backgroundColor: backgroundColor }] }>
				{ Icon && <Icon /> }
				<Text style={ Style.text }>{ text || 'Hello' }</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
