import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../components';
import { Navigation } from '../../helper';

const Wallpapers = (props) => {
	return (
		<View>
			<Header
				onPressLeftIcon={ () => Navigation.pop() }
				onPressRightIcon={ null }
				title={ 'Wallpaper' }
			/>
			<Text>Ini Wallpapers, hi { props.user?.name }!</Text>
		</View>
	);
};

export default Wallpapers;
