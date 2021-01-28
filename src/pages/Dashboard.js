import React, { useState } from 'react';
import { Cards, Search } from '../components';
import '../styles/Dashboard.scss';
import Logo from '../assets/shpe/transparentBbq.png';
import { Admin } from './Admin';

export const Dashboard = () => {
	const [activeTab, setActiveTab] = useState('dayOne');
	const [searchInput, setSearchInput] = useState('');

	let handleSearch = (e) => { setSearchInput(e.target.value) };

	const Nav = () => {
		return (
			<div className = 'navBar'>
				<div className = 'logo'>
					<img src = { Logo } alt = 'SHPE Industy BBQ' width = '150' height = '80'></img>
				</div>
				<ul>
					<div onClick = { () => setActiveTab('dayOne') }>
						<li className = { activeTab === 'dayOne' ? 'active' : '' }> Day 1 </li>
					</div>
					<div onClick = { () => setActiveTab('dayTwo') }>
						<li className = { activeTab === 'dayTwo' ? 'active' : '' }> Day 2 </li>
					</div>
					<div onClick = { () => { setActiveTab('admin') } }>
						<li className = { activeTab === 'admin' ? 'active' : '' }> Admin </li>
					</div>
				</ul>
				<div className = 'meta'>
					<span> SHPEUCF </span>
				</div>
			</div>
		);
	};

	return (
		<div className = 'outerWrap'>
			<div className = 'App'>
				{ Nav() }
				<div className = 'main'>
					<div className = 'upperNav'>
						<Search input = { handleSearch } />
					</div>
					{ activeTab === 'admin' ? <Admin />
						: <Cards data = { activeTab } search = { searchInput } />
					}
				</div>
			</div>
			<div className = 'bottomBar' />
		</div>
	);
};