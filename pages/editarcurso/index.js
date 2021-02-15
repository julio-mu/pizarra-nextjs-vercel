import { Box, Stepper, Step, StepLabel, StepContent } from '@material-ui/core';
import DashboardHeader from '../../components/DashboardHeader/dashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar/dashboardSidebar';
import CourseSteps from '../../components/CourseSteps/index';

export default function EditarCurso() {
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
