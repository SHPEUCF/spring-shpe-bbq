import React from 'react';
import '../styles/About.css';
import { FaDiscord, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { IconButton, Typography } from '@material-ui/core';

export const About = () => {
	return (
		<div>
			<div className = 'text'>
				<h1> Who are we? </h1>
				<Typography variant = 'h6'>The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles,
          California, in 1974 by a group of engineers employed by the city of Los Angeles.
          Their objective was to form a national organization of professional engineers to serve
          as role models in the Hispanic community. This organization made its way to Orlando in 1988.</Typography>
				<Typography variant = 'h6'>Our Chapter focuses on the Hispanic population at the University of Central Florida.
          For our members, we offer workshops, discussion panels, information sessions and much
           more to fully prepare our soon-to-be Engineers for the real world. Companies come to
           our Chapter to discuss a multitude of topics, such as how to write a winning resume,
           interviewing tips/techniques and what companies expect out of an entry-level Engineer.</Typography>
				<Typography variant = 'h6'>SHPE National's mission is to empower the Hispanic community, so we took it upon our
          Chapter to engage with the younger community around Orlando to inform them about the
          importance of STEM. We conduct school visits to middle and high schools through our
          SHPE Junior Program to present what technical professions are and how they affect our
          everyday life. We also monitor student competitions for SECME, a statewide program that enables
           younger students with hands-on projects with basic math and science applications.</Typography>
				<Typography variant = 'h6'>With almost 400 members, every day we're closer to reaching the entire Hispanic STEM
           community at the University of Central Florida. We are devoted to empowering our members
           to realize their fullest potential and to impact the world through STEM
          awareness, access, support, and development. Leadership is a key element for SHPE and
           we encourage all members to become leaders within our organization. It’s not only a great
           experience, but it allows you to meet other students and Chapters.</Typography>
				<Typography variant = 'h6'>Somos Familia!</Typography>
			</div>
			<div className = 'socials'>
				<IconButton size = 'large' style = {{ color: 'white' }} onClick = { () => window.open('https://discord.gg/wC5rAZAYuS') }>
				  <FaDiscord style = {{ height: '5vh', width: '5vh' }} />
				</IconButton>
				<IconButton size = 'large' style = {{ color: 'white' }} onClick = { () => window.open('https://www.instagram.com/shpeucf/') }>
					<FaInstagram style = {{ height: '5vh', width: '5vh' }} />
				</IconButton>
				<IconButton size = 'large' style = {{ color: 'white' }} onClick = { () => window.open('https://twitter.com/shpeucf') }>
					<FaTwitter style = {{ height: '5vh', width: '5vh' }} />
				</IconButton>
				<IconButton size = 'large' style = {{ color: 'white' }} onClick = { () => window.open('https://facebook.com/groups/SHPEUCF/') }>
					<FaFacebook style = {{ height: '5vh', width: '5vh' }} />
				</IconButton>
			</div>
		</div>
	);
};