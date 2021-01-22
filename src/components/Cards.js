import React, { useState } from 'react';
import '../styles/Cards.scss';
import { mondayData, tuesdayData } from '../data/companyList';
import { companyData } from '../data/companyData';
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

export const Cards = ({ data, search }) => {
	const [show, setShow] = useState(false);
	const [selectedCompany, setSelectedCompany] = useState('');

	const renderDialog = () => (
		<Dialog open = { show } onClose = { () => setShow(false) }>
			<DialogTitle>
				{ companyData.map(company => (selectedCompany === company.name) && company.title) }
			</DialogTitle>
			<DialogContent>
				<DialogContent>
					{ companyData.map(company =>
						(selectedCompany === company.name) && <img id = 'img' src = { company.img } alt = { company.name } />
					) }
				</DialogContent>
				<DialogContentText>
					{ companyData.map(company => (selectedCompany === company.name) && company.desc) }
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button size = 'small' color = 'primary' href = { selectedCompany.careersLink }> Careers </Button>
				<Button size = 'small' color = 'primary' href = { selectedCompany.zoomLink }> Join Zoom </Button>
				<Button size = 'small' color = 'primary' onClick = { () => setShow(false) }> Close </Button>
			</DialogActions>
		</Dialog>
	);

	const renderDay = () => {
		let day = (data === 'dayOne') ? mondayData : tuesdayData;
		let filterCompanies = day.filter(company => company.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

		return (
			<Grid container className = 'layout'>
				{ filterCompanies.map(({ name, img, desc }, index) =>
					<Card className = 'cards' key = { index }>
						<CardActionArea onClick = { () => { setSelectedCompany(filterCompanies[index]); setShow(true) } }>
							<CardMedia component = 'img' alt = { name } image = { img } title = { name } />
							<CardContent>
								<Typography className = 'cardText' variant = 'body1' color = 'textSecondary' component = 'p'>
									{ desc }
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				) };
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