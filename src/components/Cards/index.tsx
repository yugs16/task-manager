import Grid from '@mui/material/Grid';
import Card from './Card';
import { Task, deleteItem, getItems } from '../../api';
import { useEffect, useState } from 'react';

export default function CardList(props: any) {
	const [items, setItems] = useState<Task[]>([]);
	useEffect(() => {
		setItems(getItems());
	}, [props.refresh]);

	function handleDeleteItem(id: string) {
		deleteItem(id);
		setItems(getItems());
	}
	return (
		<Grid container spacing={2} margin={3} justifyContent={'center'}>
			{items.map((item, index) => (
				<Grid item key={index + 1}>
					<Card item={item} handleDeleteItem={handleDeleteItem}></Card>
				</Grid>
			))}
		</Grid>
	);
}
