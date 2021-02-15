import { Avatar, Box, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import DashboardSidebarStyles from './dashboardSidebar.styles';
import { School } from '@material-ui/icons';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const dashboardSidebar = ({ classes }) => {
	return (
		<Paper className={classes.root}>
			<Box p={2} className={classes.profile}>
				<Avatar />
				<Box ml={1}>
					<Typography variant="subtitle1">Julio Mayorga Ubiría</Typography>
				</Box>
			</Box>
			<Box mt={4} className={classes.buttonsContainer}>
				<Button
					variant="text"
					className={classes.sidebarButtons}
					startIcon={<School />}
				>
					Cursos
				</Button>
				<Button
					variant="text"
					className={classes.sidebarButtons}
					startIcon={<MonetizationOnIcon />}
				>
					Pagos
				</Button>
			</Box>
		</Paper>
	);
};

export default withStyles(DashboardSidebarStyles)(dashboardSidebar);
