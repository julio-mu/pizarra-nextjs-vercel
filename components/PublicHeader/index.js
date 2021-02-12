import { Box, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Link from 'next/link';
import PublicHeaderStyles from './styles';

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
						<Button variant="text">Ingresar</Button>
					</Box>
					<Box>
						<Button variant="contained" color="primary">
							Registrarme
						</Button>
					</Box>
				</Box>
			</Paper>
			<style jsx>
				{`
					.wrapper {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						padding: 16px 80px;
					}
					.logo {
						text-decoration: none;
						color: #fcfcfc;
					}
				`}
			</style>
		</>
	);
}

export default withStyles(PublicHeaderStyles)(PublicHeader);
