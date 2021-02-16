import { Avatar, Box, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import DashboardSidebarStyles from './dashboardSidebar.styles';
import { School } from '@material-ui/icons';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Link from 'next/link';

const dashboardSidebar = ({ classes }) => {
	return (
		<Paper className={classes.root}>
			<Link href="/perfil">
				<Box p={2} className={classes.profile}>
					<Avatar />
					<Box ml={1}>
						<Typography variant="subtitle1">Julio Mayorga Ubiría</Typography>
					</Box>
				</Box>
			</Link>
			<Box mt={4} className={classes.buttonsContainer}>
				<Link href="/dashboard">
					<Button
						variant="text"
						className={classes.sidebarButtons}
						startIcon={<School />}
					>
						Cursos
					</Button>
				</Link>
				<Link href="/cobros">
					<Button
						variant="text"
						className={classes.sidebarButtons}
						startIcon={<MonetizationOnIcon />}
					>
						Cobros
					</Button>
				</Link>
			</Box>
		</Paper>
	);
};

export default withStyles(DashboardSidebarStyles)(dashboardSidebar);
