import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Typography } from '@mui/material';

export default class MissionCard extends Component {
	render() {
		const { name, year, country, destination } = this.props;
		return (
			<Card variant="outlined" data-testid="mission-card" sx={{ textAlign: 'center', maxWidth: '200px', minWidth: '160px' }}>
				<Typography variant="h5" data-testid="mission-name">{ name }</Typography>
				<Divider />
				<Typography color="lightgray" variant="p" data-testid="mission-year">{ year }</Typography>
				<Divider />
				<Typography color="lightgray" variant="p" data-testid="mission-country">{ country }</Typography>
				<Divider />
				<Typography color="lightgray" variant="p" data-testid="mission-destination">{ destination }</Typography>
			</Card>
		);
	}
}

MissionCard.propTypes = {
	name: PropTypes.string,
	year: PropTypes.string,
	country: PropTypes.string,
	destination: PropTypes.string,
};

MissionCard.defaultProps = {
	name: 'mission has no name',
	year: 'mission has no year',
	country: 'mission has no country',
	destination: 'mission has no destination',
};
