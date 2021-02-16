import React, { useState } from 'react';
import { Button, Dialog, Typography, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';

export default function ModalCompartir() {
	return (
		<Box display="flex" flexDirection="column" p={2}>
			<Box display="flex" flexDirection="row">
				<Typography>Compartir curso</Typography>
				<Close variant="default" />
			</Box>
			<TextField
				variant="Outlined"
				margin="dense"
				placeholder="pizarra.io/cursos/intelifaz/marketing-de-afiliados-facil"
			></TextField>
			<Button variant="contained" color="primary">
				Copiar link
			</Button>
		</Box>
	);
}
