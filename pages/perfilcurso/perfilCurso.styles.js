export default (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	goback: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	imagescontainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%',
		padding: '16px',
	},
	individualimagecontainer: {
		width: '33%',
	},
	images: {
		height: '300px',
		width: '390px',
		objectFit: 'cover',
	},
});
