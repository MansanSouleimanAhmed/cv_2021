import React from 'react';
import Main from './components/cv';
import { createStore } from 'redux';
import allReducer from './redux-reducers/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducer, composeWithDevTools());

const App: any = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
};

export default App;
