/* eslint-disable max-len */
import React, { useState } from 'react';
import { Cards, Search } from '../components';
import { Admin } from './Admin';
import { About } from './About';
import { Membership } from './Membership';
import Logo from '../assets/shpe/shpeucflogo_bb.svg';
import Odi from '../assets/shpe/cecs-odi.png';
import Services from '../assets/shpe/career-services.png';
import '../styles/Dashboard.css';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography
} from '@material-ui/core/';
import Jaz from '../assets/images/jaz.png';

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
						<DialogContent
							style = {{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
						>
							<img style = {{ height: '30vh', width: '30vh' }} src = { Jaz } alt = 'Oh no' />
						</DialogContent>
						<Typography variant = 'body1'>
							Hi there!
						</Typography>
						<Typography variant = 'body1'>
							So happy you’ve join us for the Spring 2022 SHPEUCF Industry BBQ. Huge thank you to our professionals, 
							company sponsors and most of all our board members who was able to make this great event happen, 
							Sofia Montaña and Fredrick Santiago. Please stop by all the companies attending here today and if you’re 
							new to SHPE, WELCOME!
						</Typography>
						<Typography variant = 'body1'>
							All the Best,
						</Typography>
						<Typography variant = 'subtitle1'>
							Jazmine Manriquez
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button size = 'small' color = 'primary' onClick = { () => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSdh2ga7W6Yqprp9_Bw40qmsJ_f9Cv6of7yH8A6gq-Nwin7wvQ/viewform', '_blank') } }>
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
						<li className = { activeTab === 'dayOne' ? 'active' : '' }>BBQ Virtual Companies</li>
					</div>
					{ /* <div onClick = { () => setActiveTab('dayTwo') }>
						<li className = { activeTab === 'dayTwo' ? 'active' : '' }>Section 2 5:00 - 7:00 PM</li>
					</div> */ }
					<div onClick = { () => setActiveTab('about') }>
						<li className = { activeTab === 'about' ? 'active' : '' }>About Us</li>
					</div>
					<div onClick = { () => setActiveTab('membership') }>
						<li className = { activeTab === 'membership' ? 'active' : '' }>Join Us</li>
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