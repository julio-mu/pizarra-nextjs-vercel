import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#5C73F2',
		},
	},
});

export default theme;
