import React from 'react';
import { withStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@material-ui/core";
import CoursesTable from "../../Components/CoursesTable/coursesTable";
import DashboardBodyStyles from "./dashboardBody.styles";


const DashboardBody = ({classes}) => {
    return (
        <Box m={2} className={classes.root}>
            <Box p={2} className={classes.header}>
                <Typography variant="subtitle1">
                    Cursos
                </Typography>
                <Button variant="contained" color="primary">Nuevo curso</Button>
            </Box>
            <Box>
                <CoursesTable/>
            </Box>
        </Box>
    )
}

export default withStyles(DashboardBodyStyles)(DashboardBody);