import React, { useEffect } from 'react';
import Main from './components/cv';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { createStore } from 'redux';
import allReducer from './redux-reducers/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducer, composeWithDevTools());

const App: any = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	});

	return (
		<Provider store={store}>
			<div data-aos={'fade'}>
				<Main />
			</div>
		</Provider>
	);
};

export default App;
