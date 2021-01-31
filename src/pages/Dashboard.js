import React, { useState } from 'react';
import { Cards, Search } from '../components';
import { Admin } from './Admin';
import Logo from '../assets/shpe/shpeucflogo_bb.svg';
import '../styles/Dashboard.scss';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core/';

export const Dashboard = () => {
	const [activeTab, setActiveTab] = useState('dayOne');
	const [searchInput, setSearchInput] = useState('');
	const [filterInput, setFilterInput] = useState({});
	const [video, setVideo] = useState(true);

	let handleSearch = (e) => setSearchInput(e.target.value);
	let handleFilter = (tags) => setFilterInput(tags);

	const renderVideo = () => {
		return (
			<div>
				<Dialog
					open = { video }
					onClose = { () => setVideo(false) }
				>
					<DialogTitle>
						A Message from Our President
					</DialogTitle>
					<DialogContent>
						<DialogContent>
							<iframe className = 'video' src = 'https://www.youtube-nocookie.com/embed/_bLta_fWIYM' frameborder = '0' allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
						</DialogContent>
					</DialogContent>
					<DialogActions>
						<Button size = 'small' color = 'primary' onClick = { () => setVideo(false) }>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	};

	const Nav = () => {
		return (
			<div className = 'navBar'>
				<div className = 'logoContainer'>
					<img className = 'logo' src = { Logo } alt = 'SHPE Industy BBQ'></img>
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
				<div id = 'fadeshow' className = 'meta'>
					 Brought to you by <br></br>
					 <a className = 'ref' target = '_blank' href = 'https://github.com/SHPEUCF/' > SHPE UCF Tech Committee</a>
				</div>
			</div>
		);
	};

	return (
		<div className = 'outerWrap'>
			 { renderVideo() }
			<div className = 'App'>
				{ Nav() }
				<div className = 'main'>
					{ activeTab !== 'admin'
						? <div className = 'upperNav'>
							<Search input = { handleSearch } filters = { handleFilter } />
						</div> : null
					}
					<div className = 'mainContent'>
						{ activeTab === 'admin'
							? <Admin />
							: <Cards data = { activeTab } search = { searchInput } tags = { filterInput } />
						}
					</div>
				</div>
			</div>
		</div>
	);
};