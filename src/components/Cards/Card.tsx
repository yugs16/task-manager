import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';

import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { updateItem } from '../../api';

const CustomAccordion = styled(Accordion)(({}) => {
	return {
		height: '100%',
		border: 'none',
		marginBottom: 0,
		boxShadow: 'none',
		wordBreak: 'break-word',
		boxSizing: 'border-box',
		fontFamily: 'Monospace',
		slotProps: {
			transition: {
				timeout: 400,
			},
		},
	};
});

const Card = (props: any) => {
	const { item, handleDeleteItem, handleCountOnUpdate } = props;
	const { id, title, descp, date, status } = item;
	const [expand, setExpand] = useState(false);

	const [checked, setChecked] = useState(status === 'completed');

	useEffect(() => {
		setChecked(status === 'completed');
	}, [status]);

	function handleClick() {
		setExpand(!expand);
	}

	function handleDelete() {
		handleDeleteItem(id);
	}

	const handleChange = () => {
		updateItem(id, !checked ? 'completed' : 'pending');
		handleCountOnUpdate();
		setChecked(!checked);
	};

	let sxForPaper = {
		transition: 'width 1s ease-in-out',
		overflow: 'hidden',
		width: 'auto',
	};

	if (expand) {
		sxForPaper = { ...sxForPaper };
	}

	return (
		<Paper
			sx={(theme) => ({
				...sxForPaper,
				fontSize: 'h6.fontSize',
				minWidth: '250px',
				height: expand ? '100%' : 'auto',
				[theme.breakpoints.down('sm')]: {
					width: '100%',
					marginRight: 2,
				},
				[theme.breakpoints.up('sm')]: {
					width: expand ? '400px !important' : '250px',
				},
				[theme.breakpoints.up('sm')]: {
					width: expand ? '500px !important' : '250px',
				},
			})}
		>
			<Stack sx={{ height: '100%' }}>
				<CustomAccordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ ml: 'auto' }} />}
						onClick={handleClick}
					>
						<Box>
							<Typography component={'div'}>
								<Box
									sx={{
										fontSize: 'h6.fontSize',
									}}
								>
									{title}
								</Box>
							</Typography>
							<Typography variant="caption">
								{date ? new Date(date).toDateString() : 'In Time'}
							</Typography>
						</Box>
					</AccordionSummary>

					<Divider />

					<AccordionDetails>
						<Fade in={expand} timeout={1000}>
							<Grow in={expand} timeout={1000}>
								<div>{descp}</div>
							</Grow>
						</Fade>
					</AccordionDetails>
				</CustomAccordion>

				<Divider />
				<CardActions disableSpacing>
					<Checkbox checked={checked} color="success" onChange={handleChange} />
					<Chip
						variant="outlined"
						color={checked ? 'success' : 'info'}
						label={checked ? 'completed' : 'pending'}
					/>

					<IconButton color="error" sx={{ ml: 'auto' }} onClick={handleDelete}>
						<DeleteTwoToneIcon />
					</IconButton>
				</CardActions>
			</Stack>
		</Paper>
	);
};

export default Card;
