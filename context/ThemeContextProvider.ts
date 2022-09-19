import React, { createContext, useContext, useState } from 'react';
import { ThemeContextType } from '../@types/contextType';

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
    children?: React.ReactNode
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContextProvider);