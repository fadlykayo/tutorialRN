import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Header } from '../../components';
import { Navigation } from '../../helper';

import Style from './style';

const Home = () => {

	const [movieList, setMovieList] = useState([]);
	const [indexActiveBanner, setIndexActiveBanner] = useState(0);

	useEffect(() => {
		// getMovieList();
	}, []);

	const getMovieList = async (data) => {
		try {
			const apiFetch = await fetch('https://mywebsite.com/endpoint/', {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					// 'Content-Type': 'application/json'
				},
				// body: JSON.stringify(data)
			});

			const result = await apiFetch.json();

			setMovieList(result);

		} catch (error) {
			console.log('[Error fetch movie list] ==>', error);
		}
	};

	const menu = [
		{
			iconName: 'ios-image-outline',
			title: 'Wallpapers',
			color: 'blue',
			navigate: () => Navigation.push('wallpapers', { user: { name: 'abc' } }),
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

	const renderIndicator = () => {
		let moviesBanner = movieList.slice(0, 5);

		let position = indexActiveBanner / Dimensions.get('window').width;

		let renderIndicator = moviesBanner.map((data, index) => {
			return (
				<View style={ Style.indicatorBullet(position === index ? 'white' : 'grey') }></View>
			);
		});

		return (
			<ScrollView
				style={ Style.indicatorContainer }
				horizontal
				pagingEnabled
				onScroll={ (e) => setIndexActiveBanner(e.nativeEvent.contentOffset.x) }
			>
				{ renderIndicator }
			</ScrollView>
		);
	};

	const renderMovieCard = () => {
		return movieList.map((data, index) => {
			console.log('===>', data);

			return (
				<View>
					<Text>test</Text>
				</View>
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

				<View style={ { flex: 1 } }>
					{ renderMovieCard() }
				</View>

				<TouchableOpacity style={ Style.rightButtonFooter }>
					<Ionicons name="person-outline" size={ 25 } />
				</TouchableOpacity>

				<View style={ { flex: 1 } }></View>

			</View>
		);
	};

	return (
		<SafeAreaView style={ Style.container }>

			<Header
				onPressLeftIcon={ null }
				onPressRightIcon={ null }
				title={ 'Home' }
			/>

			<View style={ Style.content }>
				{ renderContent() }
				{ renderIndicator() }
			</View>

			{ renderFooter() }

		</SafeAreaView>
	);
};

export default Home;