import React from 'react';
import DashboardHeaderStyles from "./dashboardHeader.styles";
import { withStyles } from "@material-ui/styles";
import { Button, Typography, Paper, IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Settings } from '@material-ui/icons';

const DashboardHeader = ({ classes }) => {
    return (
        <Paper square variant="outlined" className={classes.wrapper}>
            <Link to="/" className={classes.logo}>
                <Typography>PIZARRA</Typography>
            </Link>
            <Link>
                <Settings color="action" fontSize="medium"></Settings>
            </Link>
        </Paper>
    )
};

export default withStyles(DashboardHeaderStyles)(DashboardHeader);