import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export default class Title extends Component {
	render() {
		const { props: { headline } } = this;
		return (
			<Typography variant='h2'>{headline}</Typography>
		);
	}
}

Title.propTypes = {
	headline: PropTypes.string,
};

Title.defaultProps = {
	headline: 'planet',
};
