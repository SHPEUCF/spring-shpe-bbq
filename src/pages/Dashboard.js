/* eslint-disable max-len */
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
							Thank you for joining us today at our Fall 2021 Industry BBQ. I want to start off by thanking all of our professionals and tech team, Sofia Montaña and Bryce Villanueva, for making this great event possible. Please browse around the site to check out all those in attendance throughout day, and learn more about us, while your at it.
							If this is your first time hearing about us, be sure to take a look at the ‘About Us’ section to learn more and join the Familia.
							Once again, thank you and hope you enjoy the event!
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
						<li className = { activeTab === 'dayOne' ? 'active' : '' }>Section 1: 3:00 - 5:00 PM</li>
					</div>
					<div onClick = { () => setActiveTab('dayTwo') }>
						<li className = { activeTab === 'dayTwo' ? 'active' : '' }>Section 2 5:00 - 7:00 PM</li>
					</div>
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