import { Box, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Link from 'next/link';
import PublicHeaderStyles from './publicHeader.styles.js';

const PublicHeader = ({ classes }) => {
	return (
		<>
			<Paper className={classes.wrapper} square variant="outlined">
				<Link href="/">
					<a
						style={{
							cursor: 'pointer',
							textDecoration: 'none',
							color: '#fcfcfc',
						}}
					>
						<Typography>PIZARRA</Typography>
					</a>
				</Link>
				<Box className={classes.buttons}>
					<Link href="/cursos">
						<Box p={1} pt={2} pb={2}>
							<Button variant="text">Cursos</Button>
						</Box>
					</Link>
					<Box p={1} pt={2} pb={2}>
						<Link href="/loginscreen">
							<Button variant="text">Ingresar</Button>
						</Link>
					</Box>
					<Box p={1} pt={2} pb={2}>
						<Button variant="contained" color="primary">
							Registrarme
						</Button>
					</Box>
				</Box>
			</Paper>
		</>
	);
};

export default withStyles(PublicHeaderStyles)(PublicHeader);
