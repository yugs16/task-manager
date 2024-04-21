import { css, styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';

import Fab from '@mui/material/Fab';
import Popper from '@mui/material/Popper';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import { IconButton } from '@mui/material';
import AddTask from './Forms/AddTask';

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
	[theme.breakpoints.up('lg')]: {
		right: '9%',
	},
}));

const StyledPopperDiv = styled('div')(
	({ theme }) => css`
		border-radius: 8px;
		box-shadow: ${theme.palette.mode === 'dark'
			? `0px 4px 8px rgb(0 0 0 / 0.7)`
			: `0px 4px 8px rgb(0 0 0 / 0.1)`};
		padding: 0.75rem;
		color: ${theme.palette.mode === 'dark' ? grey[100] : grey[100]};
		font-size: 0.875rem;
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 500;
		opacity: 1;
		margin: 0.25rem 0;
		width: auto;
		background: #fff;
	`
);

export interface AddButtonProps {
	reFetch: () => void;
}
export default function AddButton(props: AddButtonProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	return (
		<>
			<StyledFab
				color="secondary"
				aria-label="add"
				aria-describedby={id}
				onClick={handleClick}
			>
				<AddIcon />
			</StyledFab>

			<Popper id={id} open={open} anchorEl={anchorEl} placement={'bottom-end'}>
				<StyledPopperDiv>
					<AddTask
						reFetch={props.reFetch}
						close={() => setAnchorEl(null)}
					></AddTask>
				</StyledPopperDiv>
			</Popper>
		</>
	);
}
