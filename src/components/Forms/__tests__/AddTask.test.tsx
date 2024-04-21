import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddTask from '../AddTask';

const defaultProps = {
	reFetch: () => {},
	close: () => {},
};

beforeEach(() => {
	vi.resetModules();
});

describe('AddTask component', () => {
	beforeEach(() => {
		vi.resetModules();
	});
	test('renders without crashing', () => {
		render(<AddTask {...defaultProps} />);

		expect(screen.getByTestId('test-name-input')).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Type some details here...')
		).toBeInTheDocument();
		expect(screen.getByText('Cancel')).toBeInTheDocument();
		expect(screen.getByText('Submit')).toBeInTheDocument();
	});

	test('handles input change for both name and description correctly', async () => {
		render(<AddTask {...defaultProps} />);

		const nameInput = within(
			await screen.findByTestId('test-name-input')
		).getByRole('textbox');
		userEvent.type(nameInput, 'new task 1');

		await waitFor(() => {
			expect(nameInput).toHaveValue('new task 1');
		});

		const descpInput = await screen.findByPlaceholderText(
			'Type some details here...'
		);

		userEvent.type(descpInput, 'details are mentioned here');

		await waitFor(() => {
			expect(descpInput).toHaveValue('details are mentioned here');
		});
	});

	test('displays error when name is too short', async () => {
		render(<AddTask {...defaultProps} />);

		const nameInput = within(
			await screen.findByTestId('test-name-input')
		).getByRole('textbox');
		userEvent.type(nameInput, 'new');

		// Wait for the helper text to appear after some delay
		await waitFor(() => {
			expect(nameInput).toHaveValue('new');

			expect(
				screen.getByText('Name should have more than 3 characters')
			).toBeInTheDocument();
		});
	});

	test('submits form data correctly', async () => {
		const mockClose = vi.fn();
		const mockReFetch = vi.fn();
		// const mockAddItem = vi.fn();
		// vi.mock('../../../api', () => ({
		// 	addItem: mockAddItem,
		// }));

		render(<AddTask close={mockClose} reFetch={mockReFetch} />);
		const nameInput = within(
			await screen.findByTestId('test-name-input')
		).getByRole('textbox');
		userEvent.type(nameInput, 'new_task');

		const descpInput = screen.getByPlaceholderText('Type some details here...');

		userEvent.type(descpInput, 'details');

		await waitFor(() => {
			userEvent.click(screen.getByText('Submit'));
		});

		await waitFor(() => {
			expect(mockReFetch).toHaveBeenCalled();
			expect(mockClose).toHaveBeenCalled();
		});
	});
});
