import React, { createContext, useContext, useState } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
	theme: Theme;
	setTheme: (t: Theme) => void;
};

interface IThemeProviderProps {
	children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	setTheme: () => null,
});

export const ThemeProvider = (props: IThemeProviderProps) => {
	const { children } = props;
	const [theme, setTheme] = useState<Theme>('light');

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return {
		theme,
		setTheme,
		toggleTheme,
	};
};
