import Grid from '@mui/material/Grid';
import Card from './Card';
import { Task, deleteItem, getCount, getItems } from '../../api';
import { useEffect, useState } from 'react';
import ChipGroup from '../ChipGroup';

export default function CardList(props: any) {
	const [items, setItems] = useState<Task[]>([]);
	const [count, setCount] = useState({});
	useEffect(() => {
		setItems(getItems());
		setCount(getCount());
	}, [props.refresh]);

	const handleFetchByStatus = (val?: string) => {
		console.log('sasajksajksa');
		setItems([...getItems(val ? { status: val } : {})]);
	};

	function handleDeleteItem(id: string) {
		deleteItem(id);
		setItems(getItems());
		setCount(getCount());
	}

	function handleCountOnUpdate() {
		setCount(getCount());
	}

	return (
		<Grid
			container
			spacing={2}
			marginTop={2}
			margin={4}
			justifyContent={'center'}
			data-testid={'card-list'}
			marginLeft={{ xs: 2, sm: 4 }}
		>
			<Grid
				key={'chip-group'}
				item
				xs={12}
				sx={{
					textAlign: 'center',
				}}
			>
				<ChipGroup count={count} handleStatus={handleFetchByStatus}></ChipGroup>
			</Grid>
			{items.map((item, index) => (
				<Grid item key={index + 1} xs={12} sm={'auto'}>
					<Card
						item={item}
						handleDeleteItem={handleDeleteItem}
						handleCountOnUpdate={handleCountOnUpdate}
					></Card>
				</Grid>
			))}
		</Grid>
	);
}
