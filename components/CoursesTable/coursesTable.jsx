import { withStyles } from '@material-ui/styles';
import CoursesTableStyles from './coursesTable.styles';
import {
	Box,
	Button,
	Paper,
	TextField,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableFooter,
	TablePagination,
	Toolbar,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

const CoursesTable = ({ classes }) => {
	return (
		<Paper className={classes.root} p={2}>
			<Box p={2} className={classes.tableHeader}>
				<TextField
					variant="outlined"
					margin="dense"
					variant="outlined"
					placeholder="Buscar"
				></TextField>
				<Button variant="text" endIcon={<ArrowDropDown />}>
					5 filas
				</Button>
			</Box>
			<Table size="medium" style={{ Width: '100%' }}>
				<TableHead>
					<TableRow>
						<TableCell align="left">Curso</TableCell>
						<TableCell align="left">Categoria</TableCell>
						<TableCell align="left">Modalidad</TableCell>
						<TableCell align="left">Inscriptos</TableCell>
						<TableCell align="left">Fecha</TableCell>
						<TableCell align="left">Estado</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<Link to="/courseprofile">
							<TableCell align="left">Marketing de afiliados facil</TableCell>
						</Link>
						<TableCell align="left">Marketing</TableCell>
						<TableCell align="left">Online</TableCell>
						<TableCell align="left">0/10</TableCell>
						<TableCell align="left">05/09/2021</TableCell>
						<TableCell align="left">Por realizar</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow>
						<Toolbar>
							<TablePagination />
						</Toolbar>
					</TableRow>
				</TableFooter>
			</Table>
		</Paper>
	);
};

export default withStyles(CoursesTableStyles)(CoursesTable);
