import DashboardHeader from '../../components/DashboardHeader/dashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar/dashboardSidebar';
import { Box, TextField, Typography, Button, Avatar } from '@material-ui/core';
import Link from 'next/link';
import React, { Component } from 'react';

export default class Perfil extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			lastname: '',
			mail: '',
			phone: '',
			adress: '',
			company: '',
			website: '',
			facebook: '',
			instagram: '',
			linkedin: '',
			youtube: '',
		};
	}

	handleNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handleLastnameChange = (event) => {
		this.setState({
			lastname: event.target.value,
		});
	};

	handleMailChange = (event) => {
		this.setState({
			mail: event.target.value,
		});
	};

	handlePhoneChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
	};

	handleAdressChange = (event) => {
		this.setState({
			adress: event.target.value,
		});
	};

	handleCompanyChange = (event) => {
		this.setState({
			company: event.target.value,
		});
	};

	handleWebsiteChange = (event) => {
		this.setState({
			website: event.target.value,
		});
	};

	handleFacebookChange = (event) => {
		this.setState({
			facebook: event.target.value,
		});
	};

	handleInstagramChange = (event) => {
		this.setState({
			instagram: event.target.value,
		});
	};

	handleLinkedinChange = (event) => {
		this.setState({
			linkedin: event.target.value,
		});
	};

	handleYoutubeChange = (event) => {
		this.setState({
			youtube: event.target.value,
		});
	};

	handleSubmit = (event) => {
		alert(`${this.state.name} ${this.state.lastname}`);
		event.preventDefault();
	};

	render() {
		return (
			<Box>
				<DashboardHeader />
				<form onSubmit={this.handleSubmit}>
					<Box style={{ display: 'flex', flexDirection: 'row' }}>
						<DashboardSidebar />
						<Box p={2} pt={3} pb={3} display="flex" flexDirection="column">
							<Typography variant="subtitle1">Perfil</Typography>
							<Box pt={1} pb={1}>
								<Typography variant="body2">Foto</Typography>
								<Avatar
									style={{ marginTop: '8px', width: '120px', height: '120px' }}
								></Avatar>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Nombre</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.name}
									onChange={this.handleNameChange}
									placeholder="Julio Agustín"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Apellido</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.lastname}
									onChange={this.handleLastnameChange}
									placeholder="Mayorga Ubiría"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Mail</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.mail}
									onChange={this.handleMailChange}
									placeholder="juliomayorgaubiria@gmail.com"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Telefono</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.phone}
									onChange={this.handlePhoneChange}
									placeholder="+542612534814"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Dirección</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.adress}
									onChange={this.handleAdressChange}
									placeholder="Patricias Argentinas 252, Maip’u, Mendoza"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Empresa</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.company}
									onChange={this.handleCompanyChange}
									placeholder="HOLOS Technology"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Website</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.website}
									onChange={this.handleWebsiteChange}
									placeholder="https://juliomu.netlify.com"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Facebook</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.facebook}
									onChange={this.handleFacebookChange}
									placeholder="/juliomu"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Instagram</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.instagram}
									onChange={this.handleInstagramChange}
									placeholder="/juliomu"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">LinkedIn</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.linkedin}
									onChange={this.handleLinkedinChange}
									placeholder="/juliomu"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={0.5} pb={0.5}>
								<Typography variant="body2">Youtube</Typography>
								<TextField
									variant="outlined"
									margin="dense"
									variant="outlined"
									value={this.state.youtube}
									onChange={this.handleYoutubeChange}
									placeholder="/juliomu"
									style={{ width: '400px' }}
								></TextField>
							</Box>
							<Box pt={2}>
								<Button type="submit" variant="contained" color="primary">
									Guardar
								</Button>
							</Box>
						</Box>
					</Box>
				</form>
			</Box>
		);
	}
}
