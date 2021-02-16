import DashboardHeader from '../../components/DashboardHeader/dashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar/dashboardSidebar';
import { Box, TextField, Typography, Button, Avatar } from '@material-ui/core';
import Link from 'next/link';

export default function Perfil() {
	return (
		<Box>
			<DashboardHeader />
			<Box style={{ display: 'flex', flexDirection: 'row' }}>
				<DashboardSidebar />
				<Box p={2} pt={3} pb={3} display="flex" flexDirection="column">
					<Typography variant="subtitle1">Perfil</Typography>
					<Box pt={1} pb={1}>
						<Typography variant="body2">Foto</Typography>
						<Avatar
							style={{ marginTop: '8px', width: '120px', height: '120px' }}
						></Avatar>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Nombre</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="Julio Agustín"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Apellido</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="Mayorga Ubiría"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Mail</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="juliomayorgaubiria@gmail.com"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Telefono</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="+542612534814"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Dirección</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="Patricias Argentinas 252, Maip’u, Mendoza"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Empresa</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="HOLOS Technology"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Website</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="https://juliomu.netlify.com"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Facebook</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="/juliomu"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Instagram</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="/juliomu"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={0.5} pb={0.5}>
						<Typography variant="body2">Youtube</Typography>
						<TextField
							variant="outlined"
							margin="dense"
							variant="outlined"
							placeholder="/juliomu"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box pt={2}>
						<Button variant="contained" color="primary">
							Guardar
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
