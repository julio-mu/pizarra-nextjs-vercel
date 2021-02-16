import { Typography, Avatar, Paper, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CourseCardStyles from './courseCard.styles';
import Link from 'next/link';

const CourseCard = ({ classes }) => {
	return (
		<Link href="/curso">
			<Paper
				className={classes.root}
				style={{ width: '300px', borderRadius: '4px' }}
			>
				<Box p={2} pb={1} display="flex" flexDirection="row">
					<Typography variant="h6">Marketing para afiliados facil</Typography>
				</Box>
				<Box
					mb={2}
					pl={2}
					pr={2}
					display="flex"
					flexDirection="row"
					justifyContent="space-between"
				>
					<Typography>20 de Septiembre</Typography>
					<Box display="flex" flexDirection="row" alignItems="center">
						<Typography>Online</Typography>
						<Typography>3h</Typography>
					</Box>
				</Box>
				<Box>
					<img
						style={{ height: '200px', width: '100%', objectFit: 'cover' }}
						src="https://upload.wikimedia.org/wikipedia/commons/9/9a/PNG_transparency_demonstration_2.png"
					></img>
				</Box>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					m={2}
					mb={1}
				>
					<Box display="flex" flexDirection="row" alignItems="center">
						<Avatar className={classes.tutor} />
						<Typography variant="body2">Julio Mayorga Ubiría</Typography>
					</Box>
					<Typography variant="body2">Intelifaz</Typography>
				</Box>
				<Box
					m={2}
					mt={1}
					display="flex"
					flexDirection="row"
					justifyContent="flex-end"
				>
					<Typography variant="h6" color="primary">
						$1950
					</Typography>
				</Box>
			</Paper>
		</Link>
	);
};

export default withStyles(CourseCardStyles)(CourseCard);
