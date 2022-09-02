import React from 'react';
import Router from './src/router';
import { ReduxStore } from './src/store';

const App = () => {
	return (
		<ReduxStore>
			<Router />
		</ReduxStore>
	);
};

export default App;
