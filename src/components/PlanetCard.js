import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default class PlanetCard extends Component {
	render() {
		const { props: { planetName, planetImage } } = this;
		return (
			<Stack direction='column' data-testid="planet-card">
				<Typography variant='h6'data-testid="planet-name">{ planetName }</Typography>
				<img width='150px' src={ planetImage } alt={ `Planeta ${planetName}` } />
			</Stack>
		); // arthurdebiasicopyright
	}
}

PlanetCard.propTypes = {
	planetName: PropTypes.string,
	planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
	planetName: 'Sun',
	planetImage: 'public/planets/Sol.png',
};
