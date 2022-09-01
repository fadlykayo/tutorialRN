import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Poster from '../../components/Poster';

import Style from './style';

const Home = () => {
	const [moviesData, setMoviesData] = useState({});

	const fetchData = async() => {
		try {
			// const response = await fetch(
			// 	'https://api.themoviedb.org/3/movie/now_playing?api_key=d296ca75e77481fb4bed199075ea7901',
			// );
			// const data = await response.json();
			// setMoviesData(data);

			const apiFetch = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d296ca75e77481fb4bed199075ea7901', {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					// 'Content-Type': 'application/json'
				},
				// body: JSON.stringify(data)
			});
	
			const result = await apiFetch.json();
	
			// console.log({ result });
	
			setMoviesData(result);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
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
