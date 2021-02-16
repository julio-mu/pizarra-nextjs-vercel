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
	ArrowDropDown,
} from '@material-ui/icons';
import Link from 'next/link';
import PublicHeader from '../../components/PublicHeader';

export default function Curso() {
	return (
		<Box>
			<PublicHeader />
			<Box
				pt={3}
				pl={10}
				pr={10}
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<Box
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
									Inscribirme
								</Button>
							</Link>
						</Box>
					</Box>
					<Box>
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
							padding: '16px 0px',
						}}
					>
						<Grid item>
							<img
								style={{
									height: '300px',
									width: '390px',
									objectFit: 'cover',
								}}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
						<Grid item>
							<img
								style={{
									height: '300px',
									width: '390px',
									objectFit: 'cover',
								}}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
						<Grid item>
							<img
								style={{
									height: '300px',
									width: '390px',
									objectFit: 'cover',
								}}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
					</Grid>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="space-between"
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
						pt={2}
						pb={2}
						display="flex"
						flexDirection="row"
						alignItems="center"
						justifyContent="flex-start"
					>
						<Typography>Descripcion</Typography>
					</Box>
					<Box pt={2} pb={4}>
						<Typography>
							Veni a aprender todo sobre este hermoso oficio!Hemos hecho algunas
							modificaciones para adaptarnos a la realidad actualCada clase
							tiene menos alumnos para mantener la distancia entre tornos mínima
							de 1,5 mts. Las herramientas se sanitizan y las aulas se ventilan
							antes de cada clase. Los delantales son de uso único (podes
							traerte el tuyo). Se asignará un set de bolsas etiquetadas para
							uso de cada alumno (las vas a usar para tapar tus piezas en estado
							cuero). El taller tiene una modalidad libre, no hay niveles, cada
							alumno va a su ritmo. Nuestros profes te guiarán durante todo el
							proceso de torneado, retorneado, horneado, y decoración que más te
							guste. El espacio está armado para que cada alumno tenga su torno
							y materiales para desarrollar cada técnica. Podes arrancar cuando
							quieras y no hace falta tener conocimiento previo. El abono
							mensual equivale a 4 clases al mes de 2 horas cada una. Se reserva
							una clase por semana desde el día de inicio, es decir, si se
							comienza un martes , se reservarán automáticamente todos los
							martes de dicho mes. Si algún día no podes venir a tu clase la
							podes recuperar (siempre que nos avises con un mínimo 24 hs antes,
							como para ofrecer ese lugar a otro alumno que necesita recuperar).
							Todo lo que produzcas en la clase es tuyo! Todos los materiales y
							las horneadas están incluidas.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
