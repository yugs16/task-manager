import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { blue, green, orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const background = '0px 0px 4px 0px #fff;';

const CustomChip = styled(Chip)(({ theme }) => {
	return {
		cursor: 'pointer',
		[theme.breakpoints.down('xs')]: {
			'&:last-child': {
				marginBottom: '0 !important',
			},
		},
		[theme.breakpoints.down('sm')]: {
			margin: '8px !important',
		},
		'&:hover': {
			background: 'rgb(255 255 255 / 10%) !important',
			boxShadow: background,
		},
	};
});

interface ChipGroupProps {
	count: Record<string, number>;
	handleStatus: (val?: string) => void;
}

export default function ChipGroup(props: any) {
	const [active, setActive] = useState<string | undefined>();

	const { handleStatus, count } = props;

	useEffect(() => {});

	const handleClick = (val?: string) => () => {
		handleStatus(val);

		// setActive(val);
	};

	return (
		<Stack
			direction={'row'}
			sx={(theme) => ({
				boxSizing: 'border-box',
				[theme.breakpoints.down('sm')]: {
					display: 'block',
				},
			})}
			spacing={2}
			justifyContent={'center'}
			marginBottom={4}
		>
			<CustomChip
				clickable
				onClick={handleClick()}
				label={`All (${count.all})`}
				color="warning"
				variant="outlined"
				sx={{
					background: !active ? orange[50] : 'inherit',
					boxShadow: !active ? background : 'none',
				}}
			/>
			<CustomChip
				clickable
				label={`Pending (${count.pending})`}
				color="info"
				onClick={handleClick('pending')}
				variant="outlined"
				sx={{
					background: active === 'pending' ? blue[100] : 'inherit',
					boxShadow: active === 'pending' ? background : 'none',
				}}
			/>
			<CustomChip
				clickable
				label={`Completed (${count.completed})`}
				color="success"
				onClick={handleClick('completed')}
				variant="outlined"
				sx={{
					background: active === 'completed' ? green[100] : 'inherit',
					boxShadow: active === 'completed' ? background : 'none',
				}}
			/>
		</Stack>
	);
}
