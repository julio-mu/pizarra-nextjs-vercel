import DashboardHeader from '../../components/DashboardHeader/dashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar/dashboardSidebar';
import { Box, TextField, Typography, Button, Avatar } from '@material-ui/core';
import Link from 'next/link';

export default function Cobros() {
	return (
		<Box>
			<DashboardHeader />
			<Box style={{ display: 'flex', flexDirection: 'row' }}>
				<DashboardSidebar />
				<Box p={2} pt={3} display="flex" flexDirection="column">
					<Box pb={2}>
						<Typography variant="subtitle1">Cobros</Typography>
					</Box>
					<Box display="flex" flexDirection="column">
						<Typography>Metodos de pago</Typography>
						<Button
							style={{ marginTop: '8px' }}
							variant="contained"
							color="primary"
						>
							Conectar Mercado Pago
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
