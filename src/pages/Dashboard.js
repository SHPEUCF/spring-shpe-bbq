import React, { Component } from 'react';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Cards from '../components/Cards';
import '../styles/Dashboard.scss';

class Dashboard extends Component {
	render() {
		return (
			<div className="outerWrap">
			  <div className="App">
				<Nav />
				<div className="main">
					<Search />
					<Cards />
				</div>
			  </div>
			  <div className="bottomBar"></div>
			</div>
		  )
	}
}

export default Dashboard;