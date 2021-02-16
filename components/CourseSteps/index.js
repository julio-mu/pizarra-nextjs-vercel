import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Button,
	Avatar,
	Paper,
	Typography,
	TextField,
	Box,
	Grid,
	Chip,
} from '@material-ui/core';
import {
	ArrowDropDown,
	Instagram,
	KeyboardArrowLeft,
	LinkedIn,
} from '@material-ui/icons';
import Link from 'next/link';
import CoursesTable from '../CoursesTable/coursesTable';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '80vw',
	},
	steperContainer: {
		backgroundColor: '#303030',
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: theme.spacing(2),
	},
	resetContainer: {
		width: '100%',
		padding: theme.spacing(3),
	},
}));

function getSteps() {
	return [
		'Informacion general',
		'Informacion adicional',
		'Fotos',
		'Vista previa',
	];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return (
				<div>
					<Box>
						<Typography variant="subtitle1">Nombre del curso</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="Marketing de afiliados facil"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Slogan</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="Descubri la mejor forma de ganar ingresos..."
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Categoria</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="Marketing"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Modalidad</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="Online"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Ubicacion</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="Patricias Argentinas 252, Maipú, Mendoza"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Fecha</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="20 de Septiembre de 2021"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Duracion</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="3h"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Nivel</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="Principiante"
							style={{ width: '400px' }}
						></TextField>
					</Box>
					<Box>
						<Typography variant="subtitle1">Precio</Typography>
						<TextField
							margin="dense"
							variant="outlined"
							placeholder="$1950"
							style={{ width: '400px' }}
						></TextField>
					</Box>
				</div>
			);
		case 1:
			return (
				<Box display="flex" flexDirection="column">
					<Typography variant="subtitle1">Descripcion</Typography>
					<TextField
						variant="outlined"
						multiline
						placeholder="$1950"
						style={{ width: '100%', height: '100px' }}
					></TextField>
				</Box>
			);
		case 2:
			return (
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
							style={{ height: '300px', width: '350px', objectFit: 'cover' }}
							src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
						></img>
					</Grid>
					<Grid item>
						<img
							style={{ height: '300px', width: '350px', objectFit: 'cover' }}
							src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
						></img>
					</Grid>
					<Grid item>
						<img
							style={{ height: '300px', width: '350px', objectFit: 'cover' }}
							src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
						></img>
					</Grid>
				</Grid>
			);
		case 3:
			return (
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
								style={{ height: '300px', width: '350px', objectFit: 'cover' }}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
						<Grid item>
							<img
								style={{ height: '300px', width: '350px', objectFit: 'cover' }}
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
							></img>
						</Grid>
						<Grid item>
							<img
								style={{ height: '300px', width: '350px', objectFit: 'cover' }}
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
			);
		default:
			return 'Unknown step';
	}
}

export default function CourseSteps() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<Stepper
				className={classes.steperContainer}
				activeStep={activeStep}
				orientation="vertical"
			>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							<Box>{getStepContent(index)}</Box>
							<div className={classes.actionsContainer}>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button}
								>
									Volver
								</Button>
								<Button
									variant="contained"
									color="primary"
									onClick={handleNext}
									className={classes.button}
								>
									{activeStep === steps.length - 1
										? 'Crear curso'
										: 'Continuar'}
								</Button>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Box
					display="flex"
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
					className={classes.resetContainer}
				>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} className={classes.button}>
						Reset
					</Button>
				</Box>
			)}
		</div>
	);
}
