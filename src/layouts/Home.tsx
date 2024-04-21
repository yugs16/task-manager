import Box from '@mui/material/Box';
import CardList from '../components/Cards';
import AddButton from '../components/AddButton';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ChipGroup from '../components/ChipGroup';

export default function Home() {
	const [refresh, setRefresh] = useState(0);
	const [open, setOpen] = useState(false);

	const reFetch = () => {
		setRefresh(refresh + 1);
		setOpen(true);
	};

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<>
			<Box
				sx={{
					marginTop: 2,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<AddButton reFetch={reFetch}></AddButton>
				<CardList refresh={refresh}></CardList>
			</Box>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				onClose={handleClose}
			>
				<Alert severity="success" variant="filled">
					One task added successfully!!
				</Alert>
			</Snackbar>
		</>
	);
}
