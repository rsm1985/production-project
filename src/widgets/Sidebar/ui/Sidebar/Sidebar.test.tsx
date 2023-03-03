import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
	test('render', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('toggle', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar').className).toMatch(/collapsed/);
	});
});