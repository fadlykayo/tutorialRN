export default {
	getMovieNowPlaying: dispatch => async () => {
		const apiFetch = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d296ca75e77481fb4bed199075ea7901', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();

		if (apiFetch.ok) {
			dispatch({
				type: 'GET_MOVIE_NOW_PLAYING',
				payload: result,
			});
		} else {
			console.log('[Error Get Movie Now Playing]: ', result?.status_message);
		}
	},

	getMovieSimilar: dispatch => async id => {
		const apiFetch = await fetch(`https://api.themoviedb.org/3/movie/${ id }/similar?api_key=d296ca75e77481fb4bed199075ea7901`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			},
		});

		const result = await apiFetch.json();

		if (apiFetch.ok) {
			dispatch({
				type: 'GET_MOVIE_SIMILAR',
				payload: result,
			});
		} else {
			console.log('[Error Get Movie Similar]: ', result?.status_message);
		}
	},
};
