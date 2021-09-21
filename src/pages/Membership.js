import { Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import '../styles/Membership.scss';

export const Membership = () => {
	return (
		<div className = 'text'>
			<h2>How a to become SHPE UCF Member!</h2>
			<ul>
				<Typography variant = 'h5'>Go to <Tooltip title = 'Click to go to SHPE Website'><a className = 'link' href = 'https://shpeucf.com'>SHPE Website</a></Tooltip></Typography>
				<Typography variant = 'h5'>Click on the Membership Tab</Typography>
				<Typography variant = 'h5'>Fill out the Membership Form</Typography>
				<Typography variant = 'h5'>Follow instructions listed on form</Typography>
				<Typography variant = 'h5'>Login or create a new account on the SHPE National Page</Typography>
				<Typography variant = 'h5'>Select and complete payment for SHPE National Dues</Typography>
				<Typography variant = 'h5'>Input SHPE National Information on Form</Typography>
				<Typography variant = 'h5'>Optionally Submit Resume</Typography>
				<Typography variant = 'h5'>Complete SHPEUCF Dues</Typography>
				<Typography variant = 'h5'>Done! Congratulations! Welcome to the Familia</Typography>
			</ul>
			<Typography variant = 'h5'>Got any more questions or concerns about your membership? Email:
				<Tooltip title = 'Click me to email SHPE membership.'><a className = 'link' href = 'mailto:membership@shpeucf.com'> SHPE Membership</a></Tooltip></Typography>
		</div>
	);
};