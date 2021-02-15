import { Box, Stepper, Step, StepLabel, StepContent } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import DashboardHeader from '../../components/DashboardHeader/dashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar/dashboardSidebar';
import EditarCursoStyles from './editarCurso.styles';
import CourseSteps from '../../components/CourseSteps/index';

function EditarCurso() {
	return (
		<Box>
			<DashboardHeader />
			<Box style={{ display: 'flex', flexDirection: 'row' }}>
				<DashboardSidebar />
				<Box>
					<CourseSteps></CourseSteps>
				</Box>
			</Box>
		</Box>
	);
}

export default withStyles(EditarCursoStyles)(EditarCurso);
