import React, { useState } from 'react';
import { searchFilters, companyData } from '../data';
import '../styles/Dashboard.scss';
import SearchIcon from '@material-ui/icons/Search';
import {
	Checkbox,
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	ListItemText,
	ListSubheader,
	MenuItem,
	Select
} from '@material-ui/core/';

export const Search = ({ input, filters }) => {
	const [major, setMajor] = useState([]);
	const [position, setPosition] = useState([]);
	const [industry, setIndustry] = useState([]);

	const states = [
		{ state: major, set: setMajor },
		{ state: position, set: setPosition },
		{ state: industry, set: setIndustry }
	];

	const renderSearch = () => {
		let search = (
			<InputAdornment position = 'start'>
				<SearchIcon />
			</InputAdornment>
		);

		return (
			<FormControl className = 'search'>
				<InputLabel>Search Companies</InputLabel>
				<Input startAdornment = { search } onChange = { text => input(text) } />
		  </FormControl>
		);
	};

	// const handle

	const renderFilters = () => searchFilters.map((filterType, index) => {
		let [filterTitle, filterItems] = Object.entries(filterType)[0];

		return (
			<FormControl className = 'search-filter' key = { index }>
				<InputLabel>
					{ filterTitle }
				</InputLabel>
				<Select
					value = { states[index].state }
					onChange = { event => {
						states[index].set(event.target.value);
						filters({ major, position, industry, [filterTitle.toLowerCase()]: event.target.value });
					} }
					input = { <Input /> }
					renderValue = { selected => selected.join(', ') }
					multiple
				>
					<ListSubheader>{ filterTitle }</ListSubheader>
					{ filterItems.map(item => (
						<MenuItem key = { item } value = { item }>
							<Checkbox checked = { states[index].state.indexOf(item) > -1 } />
							<ListItemText primary = { item } />
						</MenuItem>
					)) }
				</Select >
			</FormControl>
		);
	});

	return (
		<>
			{ renderSearch() }
			{ renderFilters() }
		</>
	);
};