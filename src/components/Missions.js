import React, { Component } from 'react';
import Title from './Title'; // arthurdebiasicopyright
import MissionCard from './MissionCard';
import missions from '../data/missions';
import { Stack } from '@mui/system';

// const { name, year, country, destination } = missions;

export default class Missions extends Component {
	render() {
		return (
			<div data-testid="missions" className='missions'>
				<Title headline="Missões" />
				<Stack direction='row' flexWrap="wrap" spacing={2} justifyContent="center" alignItems="center">
					{
						missions
							.map(({ name, year, country, destination }) => (
								<MissionCard
									key={ name }
									name={ name }
									year={ year }
									country={ country }
									destination={ destination }
								/>
							))
					}
				</Stack>
			</div>
		); // arthurdebiasicopyright
	}
}
