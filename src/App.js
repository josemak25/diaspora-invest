import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import './App.css';

function App() {
	return (
		<>
			<Route path='/signup' exact component={SignUp} />
		</>
	);
}

export default App;
