import React from 'react';
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DashboardSidebarStyles from "./dashboardSidebar.styles";
import { School } from "@material-ui/icons";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


const dashboardSidebar = ({ classes }) => {

    return (
        <Box fullWidth className={classes.root}>
            <Box p={2} className={classes.profile}>
                <Avatar />
                <Box ml={1}>
                    <Typography variant="subtitle1" >Julio Mayorga Ubiría</Typography>
                </Box>
            </Box>
            <Box  fullWidth mt={4} className={classes.buttonsContainer}>
                <Button fullwidth variant="primary" className={classes.sidebarButtons} startIcon={<School/>}>
                    Cursos
                </Button>
                <Button fullwidth variant="primary"  className={classes.sidebarButtons} startIcon={<MonetizationOnIcon/>}>
                    Pagos
                </Button>
            </Box>
        </Box>
    )
}

export default withStyles(DashboardSidebarStyles)(dashboardSidebar);