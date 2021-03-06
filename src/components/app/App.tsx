import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Inputs from '../Inputs';
import Users from '../users/Users';
import IntermediateUsers from '../users/IntermediateUsers';

import './App.css';

function App(): JSX.Element {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Inputs />
				</Route>
				<Route exact path="/users">
					<Users />
				</Route>
				<Route exact path="/intermediate">
					<IntermediateUsers />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
