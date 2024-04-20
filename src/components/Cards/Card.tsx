import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import { styled } from '@mui/material/styles';

const CustomAccordion = styled(Accordion)(({ theme }) => {
	return {
		height: '100%',
		border: 'none',
		marginBottom: 0,
		boxShadow: 'none',
		slotProps: {
			transition: {
				timeout: 400,
			},
		},
	};
});

const Card = (props: any) => {
	const { item } = props;
	const [expand, setExpand] = useState(false);
	function handleClick() {
		console.log('clicked', expand);
		setExpand(!expand);
	}

	let sxForPaper = {
		transition: 'width 1s ease-in-out',
		overflow: 'hidden',
		width: '250px',
	};

	if (expand) {
		sxForPaper = { ...sxForPaper, width: '500px !important' };
	}

	return (
		<Paper
			sx={(theme) => ({
				...sxForPaper,
				minWidth: '250px',
				height: expand ? '100%' : 'auto',
				[theme.breakpoints.only('xs')]: {
					width: '100%',
				},
			})}
		>
			<Stack sx={{ height: '100%' }}>
				<CustomAccordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						onClick={handleClick}
					>
						<Stack>
							<Typography component={'div'}>
								<Box
									sx={{
										fontFamily: 'Monospace',
										fontSize: 'h6.fontSize',
									}}
								>
									Monospace
								</Box>
							</Typography>
							<Typography variant="caption">{item.date}</Typography>
						</Stack>
					</AccordionSummary>

					<Divider />

					<AccordionDetails>
						<Fade in={expand} timeout={400}>
							<Grow in={expand} timeout={400}>
								<div>{item.title}</div>
							</Grow>
						</Fade>
					</AccordionDetails>
				</CustomAccordion>

				<Divider />
				<CardActions disableSpacing sx={{ ml: 'auto' }}>
					<Button aria-label="add to favorites">Mark</Button>
					<Button variant="outlined" color="error">
						Delete
					</Button>
				</CardActions>
			</Stack>
		</Paper>
	);
};

export default Card;
