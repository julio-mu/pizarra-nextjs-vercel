import DashboardHeader from '../../components/DashboardHeader/dashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar/dashboardSidebar';
import { Box } from '@material-ui/core';
import DashboardBody from '../../components/DashboardBody/dashboardBody';

export default function Dashboard() {
	return (
		<Box>
			<DashboardHeader />
			<Box style={{ display: 'flex', flexDirection: 'row' }}>
				<DashboardSidebar />
				<DashboardBody />
			</Box>
		</Box>
	);
}
