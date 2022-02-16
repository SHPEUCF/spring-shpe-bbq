import React, { useState } from 'react';
import { dayOneData, dayTwoData, companyData } from '../data';
import '../styles/Cards.css';
import {
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography
} from '@material-ui/core/';

export const Cards = ({ data, search, tags }) => {
	const [show, setShow] = useState(false);
	const [selectedCompany, setSelectedCompany] = useState('');

	const renderDialog = () => {
		if (selectedCompany) // eslint-disable-next-line no-var
			var { tagline, img, description, careersLink, zoomLink } = companyData[selectedCompany];

		return (
			<Dialog open = { show } onClose = { () => setShow(false) }>
				<DialogTitle>
					{ tagline }
				</DialogTitle>
				<DialogContent>
					<DialogContent>
						<img id = 'img' src = { img } alt = { selectedCompany.companyName } />
					</DialogContent>
					<DialogContentText>
						{ description }
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button size = 'small' color = 'primary' href = { careersLink } target = '_blank'> Careers </Button>
					<Button size = 'small' color = 'primary' href = { zoomLink } target = '_blank'> Join Zoom </Button>
					<Button size = 'small' color = 'primary' onClick = { () => setShow(false) }> Close </Button>
				</DialogActions>
			</Dialog>
		);
	};

	const renderDay = () => {
		let day = (data === 'dayOne') ? dayOneData : dayTwoData;
		let filterCompanies = day.filter(({ companyName }) => {
			const filters = ['major', 'industry', 'position'];

			return companyName.toLowerCase().indexOf(search.toLowerCase()) !== -1
				&& (filters.every(filter => !tags[filter]
					|| tags[filter].length === 0
					|| tags[filter].some(tag => companyData[companyName][filter].includes(tag)))
				);
		});

		return (
			<Grid container className = 'layout'>
				{ filterCompanies.map(({ companyName, logo, shortDesc }, index) =>
					<Card className = 'cards' key = { index } onClick = { () => {
						setSelectedCompany(filterCompanies[index].companyName);
						setShow(true);
					} }>
						<CardActionArea>
							<CardMedia component = 'img' alt = { companyName } image = { logo } title = { companyName } />
							<CardContent>
								<Typography className = 'cardText' variant = 'body1' color = 'textSecondary'>
									{ shortDesc }
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				) }
			</Grid>
		);
	};

	return (
		<div id = 'home'>
			{ renderDialog() }
			{ renderDay() }
		</div>
	);
};