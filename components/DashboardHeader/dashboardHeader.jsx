import React from 'react';
import DashboardHeaderStyles from './dashboardHeader.styles';
import { withStyles } from '@material-ui/styles';
import { Button, Typography, Paper, IconButton } from '@material-ui/core';
import Link from 'next/link';
import { Settings } from '@material-ui/icons';

const DashboardHeader = ({ classes }) => {
	return (
		<Paper square variant="outlined" className={classes.wrapper}>
			<Link href="/" className={classes.logo}>
				<Typography>PIZARRA</Typography>
			</Link>
			<Link href="/">
				<Settings color="action" fontSize="default"></Settings>
			</Link>
		</Paper>
	);
};

export default withStyles(DashboardHeaderStyles)(DashboardHeader);
