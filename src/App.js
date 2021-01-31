import React from 'react';
import { Dashboard } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => (
	<Router>
		<Switch>
			<Route path = '/' exact component = { Dashboard } />
		</Switch>
	</Router>
);