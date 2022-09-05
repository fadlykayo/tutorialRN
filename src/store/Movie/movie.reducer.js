const initialState = {
	nowPlaying: [],
	similar: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MOVIE_NOW_PLAYING':
			return {
				...state,
				nowPlaying: action.payload.results,
			};

		case 'GET_MOVIE_SIMILAR':
			return {
				...state,
				similar: action.payload.results,
			};

		default:
			return state;
	}
};
