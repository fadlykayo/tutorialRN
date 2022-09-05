import React, { useState, useEffect } from 'react';
import {
	View, SafeAreaView, ScrollView, TouchableOpacity, Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Poster from '../../components/Poster';

import { actions } from '../../store';

import Style from './style';

const Home = () => {
	const dispatch = useDispatch();

	const getMovieNowPlayingAction = dispatch(actions.MovieAction.getMovieNowPlaying);

	const movieNowPlayingReducer = useSelector(state => state.movies.nowPlaying);
	const movieNowPlayingReducerSliced = useSelector(state => state.movies.nowPlaying.slice(0, 3));

	useEffect(() => {
		getMovieNowPlayingAction();
	}, []);

	return (
		<SafeAreaView style={ Style.container }>
			{ /* <Header /> */ }
			<View style={ Style.content }>
				<ScrollView>
					<Poster isHome posterList={ movieNowPlayingReducerSliced } />
					<View style={ Style.list }>
						<CardList title='New Release' listData={ movieNowPlayingReducer } />
						<CardList title='TV Show' listData={ movieNowPlayingReducer } />
						<CardList title='Movies' listData={ movieNowPlayingReducer } />
						<TouchableOpacity>
							<Text style={ { color: 'white' } }>press me</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
			{ /* <Footer /> */ }
		</SafeAreaView>
	);
};

export default Home;
