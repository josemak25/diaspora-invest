import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from './store';
import LoginSignUp from './pages/login-signup/Login-SignUp';
import './App.css';
import './assets/css/Helper.css';

function App() {
	return (
		<Provider store={store}>
			<CookiesProvider>
				<Router>
					<Route path='/login-signup' exact component={LoginSignUp} />
				</Router>
			</CookiesProvider>
		</Provider>
	);
}

export default App;
