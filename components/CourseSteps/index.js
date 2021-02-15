import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Button,
	Paper,
	Typography,
	TextField,
	Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
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
				<Box>
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
				</Box>
			);
		case 1:
			return 'An ad group contains one or more ads which target a shared set of keywords.';
		case 2:
			return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
		case 3:
			return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
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
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							<Typography>{getStepContent(index)}</Typography>
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
									{activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
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
