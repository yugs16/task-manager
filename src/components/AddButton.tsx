import { styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';

import Fab from '@mui/material/Fab';

const StyledFab = styled(Fab)(({ theme }) => ({
	position: 'absolute',
	zIndex: 1,
	right: '1%',
	margin: '0 auto',
	opacity: 1,
	backgroundColor: '#1976d2',
	'&:hover': {
		backgroundColor: '#1976d2',
		opacity: 0.8,
	},
	[theme.breakpoints.down('sm')]: {
		bottom: 10,
		position: 'absolute',
		left: 0,
		right: 0,
		margin: '0 auto',
	},
	[theme.breakpoints.up('md')]: {
		top: 80,
	},
	// [theme.breakpoints.up('lg')]: {
	// 	backgroundColor: green[500],
	// },
}));

export default function AddButton() {
	return (
		<StyledFab color="secondary" aria-label="add">
			<AddIcon />
		</StyledFab>
	);
}
