import { Box, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Link from 'next/link';
import PublicHeaderStyles from './publicHeader.styles.js';

function PublicHeader({ classes }) {
	return (
		<>
			<Paper className={classes.wrapper} square variant="outlined">
				<Link href="/">
					<Typography>PIZARRA</Typography>
				</Link>
				<Box>
					<Box>
						<Button variant="text">Cursos</Button>
					</Box>
					<Box>
						<Link href="/loginscreen">
							<Button variant="text">Ingresar</Button>
						</Link>
					</Box>
					<Box>
						<Button variant="contained" color="primary">
							Registrarme
						</Button>
					</Box>
				</Box>
			</Paper>
		</>
	);
}

export default withStyles(PublicHeaderStyles)(PublicHeader);
