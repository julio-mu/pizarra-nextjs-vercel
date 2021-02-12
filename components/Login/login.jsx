import { Box, Typography, Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import LoginStyles from './login.styles';
import Link from 'next/link';

const LogIn = ({ classes }) => {
	return (
		<Box className={classes.root}>
			<Box className={classes.container}>
				<Box mb={2}>
					<Typography variant="h6">Registrate en pizarra</Typography>
				</Box>
				<Box mb={1}>
					<Typography variant="body2">Nombre</Typography>
				</Box>
				<Box mb={1}>
					<TextField
						margin="dense"
						variant="outlined"
						style={{ width: '400px' }}
						placeholder="Matilde Vizencio"
					></TextField>
				</Box>
				<Box mb={1}>
					<Typography variant="body2">Contraseña</Typography>
				</Box>
				<Box mb={1}>
					<TextField
						margin="dense"
						variant="outlined"
						style={{ width: '400px' }}
						placeholder="********"
					></TextField>
				</Box>
				<Link href="/dashboard" mb={1}>
					<Button
						variant="contained"
						color="primary"
						style={{ width: '400px' }}
						type="submit"
					>
						Login
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default withStyles(LoginStyles)(LogIn);
