import DashboardHeader from '../../components/DashboardHeader/dashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar/dashboardSidebar';
import {
	Grid,
	Typography,
	Button,
	Avatar,
	Box,
	Paper,
	Chip,
} from '@material-ui/core';
import {
	KeyboardArrowLeft,
	Instagram,
	LinkedIn,
	ArrowBack,
	ArrowDownward,
	KeyboardArrowDown,
	ArrowDropDown,
} from '@material-ui/icons';
import CoursesTable from '../../components/CoursesTable/coursesTable';
import Link from 'next/link';

const PerfilCurso = () => {
	return (
		<Box>
			<DashboardHeader />
			<Box style={{ display: 'flex', flexDirection: 'row' }}>
				<DashboardSidebar />
				<Box
					style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
				>
					<Box
						p={2}
						pt={3}
						pb={1}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
						}}
					>
						<KeyboardArrowLeft variant="default"></KeyboardArrowLeft>
						<Typography variant="body2">Volver</Typography>
					</Box>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="space-between"
						p={2}
						pt={1}
						pb={1}
					>
						<Box display="flex" flexDirection="row">
							<Typography variant="h5">Marketing de afiliados facil</Typography>
							<Typography variant="h5">$1950</Typography>
						</Box>
						<Box>
							<Button variant="text">Compartir</Button>
							<Link href="/editarcurso">
								<Button variant="contained" color="primary">
									Editar curso
								</Button>
							</Link>
						</Box>
					</Box>
					<Box pl={2}>
						<Typography variant="body2">
							Descubri la mejor forma de ganar ingresos extras desde tu casa
						</Typography>
					</Box>
					<Grid
						spacing={2}
						container
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							width: '100%',
							padding: '16px',
						}}
					>
						<Grid item>
							<img
								style={{ height: '300px', width: '390px', objectFit: 'cover' }}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
						<Grid item>
							<img
								style={{ height: '300px', width: '390px', objectFit: 'cover' }}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
						<Grid item>
							<img
								style={{ height: '300px', width: '390px', objectFit: 'cover' }}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
					</Grid>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="space-between"
						pl={2}
						pr={2}
					>
						<Box
							display="flex"
							flexDirection="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Box
								pr={1}
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Avatar></Avatar>
								<Typography>Julio Mayorga Ubiria</Typography>
							</Box>
							<Box pr={1}>
								<LinkedIn></LinkedIn>
							</Box>
							<Box pl={1}>
								<Instagram></Instagram>
							</Box>
						</Box>
						<Box
							display="flex"
							flexDirection="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Box
								pr={1}
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Chip
									variant="outlined"
									color="primary"
									label="Patricias Argentinas 252, Maipú, Mendoza"
								></Chip>
							</Box>
							<Box
								pr={1}
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Chip
									variant="outlined"
									color="primary"
									label="20/09/2021"
								></Chip>
							</Box>
							<Box
								pr={1}
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Chip variant="outlined" color="primary" label="3h"></Chip>
							</Box>
							<Box
								pr={1}
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Chip variant="outlined" color="primary" label="Online"></Chip>
							</Box>
							<Box
								pr={1}
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Chip
									variant="outlined"
									color="primary"
									label="Marketing"
								></Chip>
							</Box>
							<Box
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Chip
									variant="outlined"
									color="primary"
									label="Principiante"
								></Chip>
							</Box>
						</Box>
					</Box>
					<Box
						p={2}
						display="flex"
						flexDirection="row"
						alignItems="center"
						justifyContent="flex-start"
					>
						<Typography>Descripcion</Typography>
						<ArrowDropDown></ArrowDropDown>
					</Box>
					<Box pl={2} pr={2} pb={4}>
						<CoursesTable></CoursesTable>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PerfilCurso;
