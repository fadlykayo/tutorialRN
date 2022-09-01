import React from 'react';
import { View, StyleSheet } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
	return (
		<View style={ styles.container }>
			<View style={ styles.content }>
				<FAIcon name='home' size={ 30 } color='#000' />
			</View>
			<View style={ styles.content }>
				<FAIcon name='user' size={ 30 } color='#000' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		padding: 20,
		borderTopWidth: 1,
		borderColor: '#000',
	},
	content: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Footer;
