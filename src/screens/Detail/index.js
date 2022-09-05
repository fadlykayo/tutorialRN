import React, { useState, useEffect } from 'react';
import {
	View, SafeAreaView, FlatList, Text, ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import CardList from '../../components/CardList';
import Poster from '../../components/Poster';
import { actions } from '../../store';

import Style from './style';

const Detail = () => {
	const { params } = useRoute();
	const { data } = params;

	const dispatch = useDispatch();

	const getMovieSimilarAction = dispatch(actions.MovieAction.getMovieSimilar);

	const movieSimilarReducer = useSelector(state => state.movies.similar);

	useEffect(() => {
		getMovieSimilarAction(data.id);
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
							listData={ movieSimilarReducer }
						/>
					</View>
				</ScrollView>
			</View>
			{ /* <Footer /> */ }
		</SafeAreaView>
	);
};

export default Detail;
