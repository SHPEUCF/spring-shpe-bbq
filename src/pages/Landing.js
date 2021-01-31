import React from 'react';
import Logo from '../assets/shpe/shpeucflogo_bb.svg';
import '../styles/Landing.scss';

export const Landing = () => {
	return (
		<div>
			<div className = 'logoContainerHome'>
				<img className = 'logoHome' src = { Logo } alt = 'SHPE Industy BBQ'></img>
			</div>
			<div className = 'mainContainer'>
				<iframe className = 'video' src = 'https://www.youtube-nocookie.com/embed/_bLta_fWIYM'
					frameborder = '0'
					allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen>
				</iframe>
				<a href = '/dashboard'>
					<button className = 'button'> Enter </button>
				</a>
			</div>
		</div>
	);
};