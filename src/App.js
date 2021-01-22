import React from 'react';
import { Dashboard, Landing } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => (
	<Router>
		<Switch>
			<Route path = '/' exact component = { Landing } />
			<Route path = '/dashboard' exact component = { Dashboard } />
		</Switch>
	</Router>
);