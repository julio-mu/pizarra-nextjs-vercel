import React from 'react';
import {
	Box,
	InputAdornment,
	InputBase,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@material-ui/core';
import PublicHeader from '../../components/PublicHeader/index';
import { withStyles } from '@material-ui/styles';
import { AccountCircle, Search } from '@material-ui/icons';
import CourseCard from '../../components/CourseCard/index';

export default function Cursos() {
	return (
		<Box>
			<PublicHeader></PublicHeader>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				pt={3}
				pl={10}
				pr={10}
			>
				<Box display="flex" flexDirection="row" alignItems="center">
					<TextField
						variant="outlined"
						margin="dense"
						placeholder="Curso de growth hacking"
						style={{ width: '400px' }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Search />
								</InputAdornment>
							),
						}}
					></TextField>
				</Box>
				<Box display="flex" flexDirection="row" alignItems="center">
					<Box mr={2} display="flex" flexDirection="row" alignItems="center">
						<InputLabel htmlFor="page-size" Id="page-size">
							Todas las categorias
						</InputLabel>
						<Select labelId="page-size" input={<InputBase />}>
							<MenuItem>Todas las categorias</MenuItem>
							<MenuItem>Marketing</MenuItem>
							<MenuItem>Artesanias</MenuItem>
							<MenuItem>Cocina</MenuItem>
							<MenuItem>Arte</MenuItem>
							<MenuItem>Musica</MenuItem>
							<MenuItem>Deporte</MenuItem>
							<MenuItem>Negocios</MenuItem>
							<MenuItem>Tecnologia</MenuItem>
							<MenuItem>Hobbies</MenuItem>
						</Select>
					</Box>
					<Box mr={2} display="flex" flexDirection="row" alignItems="center">
						<InputLabel htmlFor="page-size" Id="page-size">
							Online
						</InputLabel>
						<Select labelId="page-size" input={<InputBase />}>
							<MenuItem>Online</MenuItem>
							<MenuItem>Presencial</MenuItem>
						</Select>
					</Box>
					<Box display="flex" flexDirection="row" alignItems="center">
						<InputLabel htmlFor="page-size" Id="page-size">
							3 filas
						</InputLabel>
						<Select labelId="page-size" input={<InputBase />}>
							<MenuItem>3 filas</MenuItem>
							<MenuItem>6 filas</MenuItem>
							<MenuItem>9 filas</MenuItem>
							<MenuItem>12 filas</MenuItem>
						</Select>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="flex-start"
				pt={3}
				pl={10}
				pr={10}
			>
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</Box>
		</Box>
	);
}
