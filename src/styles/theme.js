import { createTheme } from '@mui/material';

const themeOptions = {
	palette: {
		mode: 'dark',
		primary: {
			main: '#9147FF',
		},
		secondary: {
			main: '#f50057',
		},
	},
};

const theme = createTheme(themeOptions);

export default theme;

