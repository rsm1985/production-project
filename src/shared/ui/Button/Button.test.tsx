import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from 'shared/ui';

describe('render', () => {
	test('button', () => {
		render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});