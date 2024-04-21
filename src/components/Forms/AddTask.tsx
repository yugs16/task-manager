import { useState } from 'react';

import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AddButtonProps } from '../AddButton';
import { addItem } from '../../api';
import { Typography } from '@mui/material';

const OkMark = styled('span')`
	margin-left: 8px;
	margin-top: 10px;
	// position: absolute;
	color: rgb(125 200 0 / 1);
`;

interface AddTaskProps extends AddButtonProps {
	close: () => void;
}

export default function AddTask(props: AddTaskProps) {
	const [form, setForm] = useState({ name: '', descp: '' });
	const [valid, setValid] = useState<Record<string, any>>({
		name: { once: false },
		descp: { once: false },
	});

	const handleChange =
		(key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setForm({
				...form,
				[key]: event.target.value,
			});
			if (!valid[key].once) {
				setValid({
					...valid,
					[key]: {
						once: true,
					},
				});
			}
		};

	const handleSubmit = (form: Record<string, string>) => {
		addItem({
			title: form.name,
			descp: form.descp,
		});
		props.reFetch();
		props.close();
	};

	const nameError = !!(valid.name.once && form.name.length < 4);

	return (
		<Stack
			spacing={2}
			margin={2}
			marginBottom={1}
			marginTop={1}
			sx={(theme) => ({
				[theme.breakpoints.up('sm')]: {
					width: 'auto',
					minWidth: 400,
				},
				[theme.breakpoints.up('lg')]: {
					minWidth: 500,
				},
			})}
		>
			<Typography variant="h4" sx={{ opacity: 1, color: '#000' }}>
				Add Task
			</Typography>
			<TextField
				required
				error={nameError}
				id="outlined-name"
				label="Name"
				type="text"
				name="name"
				value={form.name}
				helperText={nameError && 'Name should have more than 3 characters'}
				onChange={handleChange('name')}
				data-testid={'test-name-input'}
			/>
			<TextField
				hiddenLabel
				id="outlined-descp"
				multiline
				fullWidth
				value={form.descp}
				onChange={handleChange('descp')}
				maxRows={10}
				placeholder="Type some details here..."
			/>
			{form.name && !nameError && <OkMark />}

			<Divider />

			<Stack spacing={2} direction={'row'} justifyContent={'flex-end'}>
				<Button variant="outlined" onClick={props.close}>
					Cancel
				</Button>
				<Button
					disabled={!form.name || !!nameError}
					variant="contained"
					onClick={() => handleSubmit(form)}
				>
					Submit
				</Button>
			</Stack>
		</Stack>
	);
}
