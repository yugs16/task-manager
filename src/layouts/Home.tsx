import Box from '@mui/material/Box';
import AddButton from '../components/AddButton';

export default function Home() {
	return (
		<Box
			sx={{
				marginTop: 2,
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<AddButton></AddButton>
		</Box>
	);
}
