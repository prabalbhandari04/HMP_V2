import React, { createContext, useContext, useState } from 'react';
import { ThemeContextType } from '../@types/contextType';
import { themes } from './Themes';

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type Props = {
    children?: React.ReactNode
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);