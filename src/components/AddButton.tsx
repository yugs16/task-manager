import { Theme, css, styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';

import Fab from '@mui/material/Fab';
import Popper from '@mui/material/Popper';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import AddTask from './Forms/AddTask';

import useMediaQuery from '@mui/material/useMediaQuery';

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
		position: 'fixed',
		left: 0,
		right: 0,
		margin: '0 auto',
	},
	[theme.breakpoints.up('sm')]: {
		top: 100,
	},
	[theme.breakpoints.up('lg')]: {
		right: '9%',
	},
}));

const StyledPopperDiv = styled('div')(
	({}) => css`
		border-radius: 8px;
		box-shadow: 0px 4px 8px rgb(0 0 0 / 0.7);
		padding: 0.75rem;
		margin: 0.25rem 0.5rem;
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
	const isSmallScreen = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('sm')
	);

	const popperPlacement = isSmallScreen ? 'top' : 'bottom-end';

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

			<Popper
				id={id}
				open={open}
				anchorEl={anchorEl}
				placement={popperPlacement}
				sx={{ width: isSmallScreen ? '90%' : 'auto' }}
			>
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
