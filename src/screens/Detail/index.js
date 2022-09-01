import React, { useState, useEffect } from 'react';
import {
	View, SafeAreaView, FlatList, Text, ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

import CardList from '../../components/CardList';
import Poster from '../../components/Poster';

import Style from './style';

const Detail = () => {
	const { params } = useRoute();
	const { data } = params;

	// console.log(JSON.stringify(data, null, 2));

	const [similiar, setSimiliar] = useState({});

	const fetchData = async() => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${data?.id}/similar?api_key=d296ca75e77481fb4bed199075ea7901`,
			);
			const resData = await response.json();
			setSimiliar(resData);
			// console.log({ resData });
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (!data) {
		return null;
	}

	const renderEpisodes = () => {
		return (
			<View style={ [Style.episodeContainer] }>
				<Text style={ Style.title }>Episodes</Text>
				<View style={ Style.episodeWrapper }>
					<View style={ Style.episodeLeft } />
					<View style={ Style.episodeRight }>
						<Text style={ Style.episodeTitle }>1 - { data.title }</Text>
						<Text numberOfLines={ 2 } style={ Style.episodeSubTitle }>{ data.overview }</Text>
					</View>
				</View>
				<View style={ Style.line } />
			</View>
		);
	};

	return (
		<SafeAreaView style={ Style.container }>
			{ /* Webview video embed example */ }
			{ /* <View style={ { width: '100%', height: 500 } }>
				<WebView
					source={ { uri: 'https://www.youtube.com/embed/RJa4kG1N3d0' } }
				/>
			</View> */ }
			{ /* <Header /> */ }
			<View style={ Style.content }>
				<ScrollView>
					<Poster posterData={ data } />
					<View style={ Style.info }>
						<Text style={ Style.title }>Synopsis</Text>
						<Text style={ Style.text }>{ data.overview }</Text>
					</View>
					<View style={ Style.line } />
					{ renderEpisodes() }
					<View style={ Style.list }>
						<CardList
							title='You Might Also Like This'
							listData={ similiar?.results }
						/>
					</View>
				</ScrollView>
			</View>
			{ /* <Footer /> */ }
		</SafeAreaView>
	);
};

export default Detail;
