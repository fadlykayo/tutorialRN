import MovieReducer from './Movie/movie.reducer';
import MovieAction from './Movie/movie.action';

import { ReduxStore, asyncStore } from './config';

const actions = {
	MovieAction,
};

const reducers = {
	MovieReducer,
};

export {
	actions,
	reducers,
	ReduxStore,
	asyncStore,
};
