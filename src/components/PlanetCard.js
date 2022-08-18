import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { props: { planetName, planetImage } } = this;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
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
