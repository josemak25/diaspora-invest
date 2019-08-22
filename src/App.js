import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import './App.css';

function App() {
	return (
		<>
			<Router>
				<Route path='/signup' exact component={SignUp} />
			</Router>
			,
		</>
	);
}

export default App;
