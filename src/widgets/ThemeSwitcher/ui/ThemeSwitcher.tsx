import React from 'react';
import {useTheme} from 'app/providers/theme';
import {ThemeToggle} from 'shared/assets';

export const ThemeSwitcher = () => {
	const {theme, toggleTheme} = useTheme();
	return (<ThemeToggle color={theme === 'light' ? 'yellow' : 'blue'} toggleTheme={() => toggleTheme()} />);
};