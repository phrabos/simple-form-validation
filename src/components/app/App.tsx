import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inputs from '../Inputs';
import Users from '../users/Users';

import './App.css';

function App(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Inputs />
				</Route>
				<Route exact path="/users">
					<Users />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
