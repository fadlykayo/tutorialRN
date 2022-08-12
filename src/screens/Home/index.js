import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components';

import Style from './style';

const Home = () => {
	const navigation = useNavigation();

	const menu = [
		{
			iconName: 'ios-image-outline',
			title: 'Wallpapers',
			color: 'blue',
			navigate: navigation.navigate('wallpapers'),
		},
		{
			iconName: 'ios-images-outline',
			title: 'Image-Editor',
			color: 'orange',
			navigate: null,
		},
		{
			iconName: 'ios-musical-notes-outline',
			title: 'Ringtones',
			color: 'red',
			navigate: null,
		},
		{
			iconName: 'ios-phone-portrait-outline',
			title: 'Home',
			color: 'green',
			navigate: null,
		},
		{
			iconName: 'ios-file-tray-outline',
			title: 'Frame',
			color: 'purple',
			navigate: null,
		}
	];

	const renderContent = () => {
		return menu.map((data, index) => {
			return (
				<TouchableOpacity key={ index } style={ Style.cardContainer(data.color) } onPress={ data.navigate }>
					<Ionicons name={ data.iconName } size={ 25 } color="white" />
					<Text style={ Style.cardText }>{ data.title }</Text>
				</TouchableOpacity>
			);
		});
	};

	const renderFooter = () => {
		return (
			<View style={ Style.footer }>

				<View style={ { flex: 1 } }></View>

				<TouchableOpacity style={ Style.leftButtonFooter }>
					<Ionicons name="home-outline" size={ 25 } />
				</TouchableOpacity>

				<View style={ { flex: 1 } }></View>

				<TouchableOpacity style={ Style.rightButtonFooter }>
					<Ionicons name="person-outline" size={ 25 } />
				</TouchableOpacity>

				<View style={ { flex: 1 } }></View>

			</View>
		);
	};

	return (
		<SafeAreaView style={ Style.container }>

			<Header />

			<View style={ Style.content }>
				{ renderContent() }
			</View>

			{ renderFooter() }

		</SafeAreaView>
	);
};

export default Home;