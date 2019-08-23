import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginSignUp from './pages/login-signup/Login-SignUp';
import './App.css';

function App() {
	return (
		<>
			<Router>
				<Route path='/login-signup' exact component={LoginSignUp} />
			</Router>
			,
		</>
	);
}

export default App;
