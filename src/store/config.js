import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import MovieReducer from './Movie/movie.reducer';

const rootReducer = combineReducers({
	movies: MovieReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const asyncStore = createStore(
	persistedReducer,
	applyMiddleware(thunk)
);

const persistor = persistStore(asyncStore);
// persistor.purge();

const ReduxStore = props => {
	return (
		<Provider store={ asyncStore }>
			<PersistGate loading={ null } persistor={ persistor }>
				{ props.children }
			</PersistGate>
		</Provider>
	);
};

export { ReduxStore, asyncStore };
