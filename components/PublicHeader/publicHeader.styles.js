export default function PublicHeaderStyles({ theme }) {
	return {
		wrapper: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '0px 80px',
		},
		buttons: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		logo: {
			textDecoration: 'none',
			color: '#fcfcfc',
		},
	};
}
