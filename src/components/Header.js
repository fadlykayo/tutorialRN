import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Header = () => {
	return (
		<View style={ styles.container }>
			<View style={ styles.content }>
				<FeatherIcon name='aperture' size={ 30 } color='#900' />
				<Text style={ styles.text }>Studio Rebel</Text>
			</View>
			<View style={ styles.content }>
				<FeatherIcon name='settings' size={ 30 } color='#000' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomWidth: 1,
		borderColor: '#000',
	},
	content: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		color: '#000',
		paddingLeft: 20,
		fontWeight: 'bold',
	},
});

export default Header;
