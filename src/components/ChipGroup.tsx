import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const CustomChip = styled(Chip)(({ theme }) => {
	return {
		cursor: 'pointer',
	};
});

export default function ChipGroup(props: any) {
	const [active, setActive] = useState();

	const { handleStatus } = props;

	return (
		<Stack
			direction={'row'}
			sx={{ boxSizing: 'border-box' }}
			spacing={2}
			justifyContent={'center'}
			marginBottom={4}
		>
			{/* <Button onClick={handleStatus} color="error" variant="outlined">
				All
			</Button>
			<Button onClick={handleStatus('pending')} color="info" variant="outlined">
				Pending
			</Button>
			<Button
				onClick={handleStatus('completed')}
				color="success"
				variant="outlined"
			>
				Completed
			</Button> */}

			<CustomChip
				onClick={handleStatus()}
				label="All"
				color="warning"
				variant="outlined"
			/>
			<CustomChip
				label="Pending"
				color="info"
				onClick={handleStatus('pending')}
				variant="outlined"
			/>
			<CustomChip
				label="Completed"
				color="success"
				onClick={handleStatus('completed')}
				variant="outlined"
			/>
		</Stack>
	);
}
