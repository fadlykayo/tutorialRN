import React from 'react';
import { View, Text } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Wallpapers = () => {
	return (
		<View style={ { flex: 1 } }>
			<Header />
			<View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
				<Text>Wallpapers Screen</Text>
			</View>
			<Footer />
		</View>
	);
};

export default Wallpapers;
