import Grid from '@mui/material/Grid';
import Card from './Card';
import { Task, deleteItem, getItems } from '../../api';
import { useEffect, useState } from 'react';
import ChipGroup from '../ChipGroup';

export default function CardList(props: any) {
	const [items, setItems] = useState<Task[]>([]);
	useEffect(() => {
		setItems(getItems());
	}, [props.refresh]);

	const handleFetchByStatus = (val: string) => () => {
		setItems([...getItems(val ? { status: val } : {})]);
	};

	function handleDeleteItem(id: string) {
		deleteItem(id);
		setItems(getItems());
	}
	return (
		<Grid container spacing={2} margin={3} justifyContent={'center'}>
			<Grid
				key={'chip-group'}
				item
				xs={12}
				sx={{
					textAlign: 'center',
				}}
			>
				<ChipGroup handleStatus={handleFetchByStatus}></ChipGroup>
			</Grid>
			{items.map((item, index) => (
				<Grid item key={index + 1}>
					<Card item={item} handleDeleteItem={handleDeleteItem}></Card>
				</Grid>
			))}
		</Grid>
	);
}
