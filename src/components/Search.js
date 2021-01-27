import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import '../styles/Dashboard.scss';

const majors = [
	'Aerospace Engineering',
	'Civil Engineering',
	'Computer Engineering',
	'Computer Science',
	'Construction Engineering',
	'Electrical Engineering',
	'Environmental Engineering',
	'Industrial Engineering',
	'Information Technology',
	'Materials Science',
	'Mechanical Engineering'
];
const industries = [
	'Aerospace',
	'Banking/Finance',
	'Drone Striking Innocent Civilians on Foreign Lands',
	'Consulting',
	'Cybersecurity',
	'Energy',
	'HR',
	'Management',
	'Manufacturing',
	'Research',
	'Technology',
	'Transportation',
	'Other'
];
const classLevels = [
	'Undergraduate',
	'Graduate',
	'PhD',
	'Freshmen',
	'Sophomore',
	'Junior',
	'Senior'
];

export const Search = () => {
	const [tag, setTag] = useState([]);

	const handleChange = (event) => {
		setTag(event.target.value);
	};

	return (
		<div className = 'searchBar'>
			<FormControl>
				<InputLabel>Tags</InputLabel>
				<Select
					multiple
					value = { tag }
					onChange = { handleChange }
					input = { <Input /> }
					renderValue = { (selected) => selected.join(', ') }
				>
					<ListSubheader>Majors</ListSubheader>
					{ majors.map((major) => (
						<MenuItem key = { major } value = { major }>
							<Checkbox checked = { tag.indexOf(major) > -1 } />
							<ListItemText primary = { major } />
						</MenuItem>
					)) }
					<ListSubheader>Industry</ListSubheader>
					{ industries.map((industry) => (
						<MenuItem key = { industry } value = { industry }>
							<Checkbox checked = { tag.indexOf(industry) > -1 } />
							<ListItemText primary = { industry } />
						</MenuItem>
					)) }
					<ListSubheader>Class Level</ListSubheader>
					{ classLevels.map((level) => (
						<MenuItem key = { level } value = { level }>
							<Checkbox checked = { tag.indexOf(level) > -1 } />
							<ListItemText primary = { level } />
						</MenuItem>
					)) }
				</Select>
			</FormControl>
		</div>
	);
};