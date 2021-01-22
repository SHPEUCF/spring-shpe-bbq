import React from 'react';
import Landing from './pages/Landing.js';
import Dashboard from './pages/Dashboard.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<Router>
					<Switch>
						<Route path = "/" exact component = { Landing } />
						<Route path = "/dashboard" exact component = { Dashboard } />
					</Switch>
			</Router>
		);
	}
}

export default App;