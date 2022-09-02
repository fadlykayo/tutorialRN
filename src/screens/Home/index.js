import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Poster from '../../components/Poster';

import { actions } from '../../store';

import Style from './style';

const Home = () => {
	const [moviesData, setMoviesData] = useState({});

	const dispatch = useDispatch();

	const getMovieNowPlayingAction = dispatch(actions.MovieAction.getMovieNowPlaying);
	const getMovieSimilarAction = dispatch(actions.MovieAction.getMovieSimilar);

	const movieNowSelector = useSelector(state => state.movies.nowPlaying);

	// console.log('ini global state kita', movieNowSelector[0].id);

	useEffect(() => {
		dispatch(actions.MovieAction.getMovieNowPlaying);
	}, []);

	return (
		<SafeAreaView style={ Style.container }>
			{ /* <Header /> */ }
			<View style={ Style.content }>
				<ScrollView>
					<Poster isHome posterList={ moviesData?.results?.slice(0, 3) } />
					<View style={ Style.list }>
						<CardList title='New Release' listData={ moviesData?.results } />
						<CardList title='TV Show' listData={ moviesData?.results } />
						<CardList title='Movies' listData={ moviesData?.results } />
					</View>
				</ScrollView>
			</View>
			{ /* <Footer /> */ }
		</SafeAreaView>
	);
};

export default Home;
