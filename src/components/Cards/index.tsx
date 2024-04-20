import Grid from '@mui/material/Grid';
import Card from './Card';

const heights = [
	{
		minHeight: 150,
		title:
			'1st tasksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa pppppppppppppppppppppppppppp',
		date: new Date().toDateString(),
	},
	{
		minHeight: 150,
		title: '1st tasksaaaaaaaa',
		date: new Date().toDateString(),
	},
	{
		minHeight: 150,
		title: '1st tasksaaaaaaaa',
		date: new Date().toDateString(),
	},
	{
		minHeight: 150,
		title: '1st tasksaaaaaaaa',
		date: new Date().toDateString(),
	},
	{
		minHeight: 150,
		title: '1st tasksaaaaaaaa',
		date: new Date().toDateString(),
	},
];

export default function CardList() {
	return (
		<Grid container spacing={2} margin={3} justifyContent={'space-evenly'}>
			{heights.map((item, index) => (
				<Grid item>
					<Card key={index + 1} item={item}></Card>
				</Grid>
			))}
		</Grid>
	);
}

// export default function CardList() {
// 	return (
// 		<Box sx={{ width: '80%', minHeight: 829 }}>
// 			{/* <Masonry spacing={2}> */}
// 			{heights.map((item, index) => (
// 				<>
// 					<CustomAccordion key={index + 1} item={item}></CustomAccordion>
// 					{/* <SlowWidthIncreaseAccordion /> */}
// 				</>
// 			))}
// 			{/* </Masonry> */}
// 		</Box>
// 	);
// }
