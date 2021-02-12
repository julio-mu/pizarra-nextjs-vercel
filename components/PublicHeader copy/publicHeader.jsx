import React from 'react';
import PublicHeaderStyles from "./publicHeader.styles";
import { withStyles } from "@material-ui/styles";
import { Box, Button, Typography, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";

const PublicHeader = ({ classes }) => {
    return (
        <Paper square variant="outlined" className={classes.wrapper}>
            <Link to="/" className={classes.logo}>
                <Typography>PIZARRA</Typography>
            </Link>
            <Box>
                <Link>
                    <Button variant="text" className={classes.space}>Cursos</Button>
                </Link>
                <Link to="/login">
                    <Button variant="text" className={classes.space}>Ingresar</Button>
                </Link>
                <Link>
                    <Button variant="contained" color="primary" className={classes.space}>Registrarme</Button>
                </Link>
            </Box>
        </Paper>
    )
};

export default withStyles(PublicHeaderStyles)(PublicHeader);