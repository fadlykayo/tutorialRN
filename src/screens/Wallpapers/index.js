import React from 'react';
import { View, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { Header } from '../../components';

const Wallpapers = (props) => {
	return (
		<View>
			<Header
				onPressLeftIcon={ () => StackActions.pop() }
				onPressRightIcon={ null }
				title={ 'Wallpaper' }
			/>
			<Text>Ini Wallpapers, hi { props.user?.name }!</Text>
		</View>
	);
};

export default Wallpapers;
