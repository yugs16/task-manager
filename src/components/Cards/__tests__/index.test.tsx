import { screen, render } from '@testing-library/react';
import CardList from '../index';

const mockCheckCardProps = vi.fn();

vi.mock('./Card', () => ({
	default: function MockCard(props: any) {
		mockCheckCardProps(props);
		return (
			<>
				<div data-testid={'mock-card'} onClick={props.deleteItem('id1')}></div>
			</>
		);
	},
}));

const mockGetCount = vi.fn();
vi.mock('../../api', () => {
	return {
		deleteItem: vi.fn(),
		getItems: vi.fn(() => [{ title: 't1', id: 'id1' }]),

		getCount: () => mockGetCount,
	};
});

describe('CardList Component', () => {
	beforeEach(() => {
		vi.resetModules;
		vi.resetAllMocks();
	});
	test('renders CardList component', () => {
		render(<CardList />);
		expect(screen.queryByTestId('card-list')).not.toBeNull();
	});
});
