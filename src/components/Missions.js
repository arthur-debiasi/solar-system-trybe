import React, { Component } from 'react';
import Title from './Title'; // arthurdebiasicopyright
import MissionCard from './MissionCard';
import missions from '../data/missions';

// const { name, year, country, destination } = missions;

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
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
      </div>
    ); // arthurdebiasicopyright
  }
}
