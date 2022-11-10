import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import { Stack } from '@mui/system';

export default class SolarSystem extends Component {
	render() {
		return (
			<div data-testid="solar-system" className="solar-system">
				<Title headline="Planetas" />
				<Stack direction='row' flexWrap="wrap">
					{
						planets.map(({ name, image }) => (
							<PlanetCard key={ name } planetName={ name } planetImage={ image } />
						))
					}
				</Stack>
			</div>
		);
	}
}
