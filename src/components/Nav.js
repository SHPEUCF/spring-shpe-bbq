import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.scss';
import Logo from '../assets/shpe/transparentBbq.png';

export const Nav = () => {
	return (
		<div className = 'navBar'>
			<div className = 'logo'>
				<img src = { Logo } alt = 'SHPE Industy BBQ' width = '150' height = '80'></img>
			</div>
			<ul>
				<Link to = '/dashboard'>
					<li className = 'active'> Day 1 </li>
				</Link>
				<Link to = '/daytwo'>
					<li>  Day 2 </li>
				</Link>
				<Link to = '/admin'>
					<li> Admin </li>
				</Link>
			</ul>
			<div className = 'meta'>
				<span>SHPEUCF</span>
			</div>
		</div>
	);
};