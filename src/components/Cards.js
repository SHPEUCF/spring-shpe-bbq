import React, { Component } from 'react';
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
	Typography,
} from '@material-ui/core';

export default class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			currCompany: '',
			image: '',
			search: ''
		};
	}

	showModal = (bool, companyName) => {
  		let img;

  		companyData.map(company => {
			if (this.state.currCompany === company.name)
				img = company.img;
		});
  		this.setState({
			currCompany: companyName,
			show: bool,
			image: img
  		});
  	};

	hideModal = (val) => {
		this.setState({
			show: val,
			showVideo: val
  		});
	};

	getZoomLink = (e) => {
		e.preventDefault();
		let ref;

		companyData.map(company => {
			if (this.state.currCompany === company.name)
				ref = company.zoomLink;
		});
		window.open(ref, '_blank');
	}

	getCareersLink = (e) => {
		e.preventDefault();
		let ref;

		companyData.map(company => {
			if (this.state.currCompany === company.name)
				ref = company.careersLink;
		});
		window.open(ref, '_blank');
	}

	renderDialog() {
		return (
			<div>
				<Dialog open = { this.state.show } onClose = { () => this.hideModal(false) }>
					<DialogTitle>
						{ companyData.map(company => { if (this.state.currCompany === company.name) return company.title; }) }
					</DialogTitle>
					<DialogContent>
						<DialogContent>
							{ companyData.map(company => { 
								if (this.state.currCompany === company.name) 
								return <img id = 'img' src = { company.img } alt = 'unavailable' />; 
							})}
						</DialogContent>
						<DialogContentText>
							{ companyData.map(company => {
								if (this.state.currCompany === company.name) 
								return company.desc;
							})}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button size = 'small' color = 'primary' onClick = { (e) => this.getCareersLink(e) }> Careers </Button>
						<Button size = 'small' color = 'primary' onClick = { (e) => this.getZoomLink(e) }> Join Zoom </Button>
						<Button size = 'small' color = 'primary' onClick = { () => this.hideModal(false) }> Close </Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}

	renderMonday() {
		let filterCompanies = mondayData.filter(company => {
			return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
		});

		return (
			<Grid container className = 'layout'> 
				{ filterCompanies.map((company) =>
					<Card className = 'cards'
						key = { company.id }>
						<CardActionArea onClick = { () => this.showModal(true, company.name) }>
							<CardMedia
								component = 'img'
								alt = { company.name }
								image = { company.img }
								title = { company.name }
							/>
							<CardContent>
								<Typography className = 'cardText' variant = 'body1' color = 'textSecondary' component = 'p'>
									{ company.desc }
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				)};
			</Grid>
		);
	}

	renderTuesday() {
		let filterCompanies = tuesdayData.filter(company => {
			return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
		});

		return (
			<Grid container className = 'layout'>
				{ filterCompanies.map((company) =>
					<Card className = 'cards'
						key = { company.id }>
						<CardActionArea onClick = { () => this.showModal(true, company.name) } >
							<CardMedia
								component = 'img'
								alt = { company.name }s
								image = { company.img }
								title = { company.name }
							/>
							<CardContent className = 'cardContent'>
								<Typography className = 'cardText' variant = 'body1' color = 'textSecondary' component = 'p'>
									{ company.desc }
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				)};
			</Grid>
		);
	}

	render() {
		return (
			<div id = 'home'>
				{ this.renderDialog() }
				{ this.renderMonday() }
				{ this.renderTuesday() }
			</div>
		);
	}
}