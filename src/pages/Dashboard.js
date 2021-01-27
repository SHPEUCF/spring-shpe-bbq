import React from 'react';
import { Cards, Nav, Search } from '../components';
import '../styles/Dashboard.scss';

export const Dashboard = () => (
	<div className = 'outerWrap'>
		<div className = 'App'>
			<Nav />
			<div className = 'main'>
				<div className = 'upperNav'>
					<Search />
				</div>
				<Cards data = 'dayOne' search = '' />
			</div>
		</div>
		<div className = 'bottomBar' />
	</div>
);