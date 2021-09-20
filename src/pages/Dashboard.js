import React, { useState } from 'react';
import { Cards, Search } from '../components';
import { Admin } from './Admin';
import { About } from './About';
import { Membership } from './Membership';
import Logo from '../assets/shpe/shpeucflogo_bb.svg';
import Odi from '../assets/shpe/cecs-odi.png';
import Services from '../assets/shpe/career-services.png';
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
							<iframe className = 'video' src = 'https://www.youtube.com/embed/f0aFnUr8vxY' frameborder = '0' allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
						</DialogContent>
					</DialogContent>
					<DialogActions>
						<Button size = 'small' color = 'primary' onClick = { () => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSdhb0AG6LZeg4Kh69_XBtsbJfanxAnsAj6CMkKzKlNN8aPv9A/viewform', '_blank') } }>
							<b>Student Registration</b>
						</Button>
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
						<li className = { activeTab === 'dayOne' ? 'active' : '' }>Non Tech</li>
					</div>
					<div onClick = { () => setActiveTab('dayTwo') }>
						<li className = { activeTab === 'dayTwo' ? 'active' : '' }>Tech</li>
					</div>
					<div onClick = { () => setActiveTab('about') }>
						<li className = { activeTab === 'about' ? 'active' : '' }> About Us </li>
					</div>
					<div onClick = { () => setActiveTab('membership') }>
						<li className = { activeTab === 'membership' ? 'active' : '' }> Join Us </li>
					</div>
					{ /* <div onClick = { () => { setActiveTab('admin') } }>
						<li className = { activeTab === 'admin' ? 'active' : '' }> Admin </li>
						</div> */ }
				</ul>
				<div id = 'fadeshow' className = 'meta'>
					 Brought to you by <br></br>
					 <a className = 'ref' target = '_blank' href = 'https://github.com/SHPEUCF/' > SHPE UCF Tech Committee</a>
				</div>
			</div>
		);
	};

	const Tabs = ({ tab }) => {
		switch (tab) {
		  case 'about':
				return <About />;
		  case 'membership':
				return <Membership />;
		  default:
				return <Cards data = { activeTab } search = { searchInput } tags = { filterInput } />;
		}
	  };

	return (
		<div className = 'outerWrap'>
			 { renderVideo() }
			<div className = 'App'>
				{ Nav() }
				<div className = 'main'>
					{ /* { activeTab === 'dayOne' || activeTab === 'dayTwo' ? (
						<div className = 'upperNav'>
							<Search input = { handleSearch } filters = { handleFilter } />
						</div>
					) : null } */ }
					<div className = 'mainContent'>
						{ activeTab === 'dayOne' || activeTab === 'dayTwo' ? (
							<Cards data = { activeTab } search = { searchInput } tags = { filterInput } />
						) : (
							<Tabs tab = { activeTab } />
						) }
					</div>
				</div>
			</div>
			<div className = 'footer'>
				<h3>Special Thanks to:</h3>
				<img className = 'services' src = { Services } alt = 'career services logo'></img>
				<img className = 'odi' src = { Odi } alt = 'ODI Logo'></img>
			</div>
		</div>
	);
};