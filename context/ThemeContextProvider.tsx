import React, { createContext, useContext, useState } from 'react';
import { ThemeContextType, themeType } from '../@types/contextType';
import { themes } from './Themes';

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type Props = {
    children?: React.ReactNode
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<themeType>(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);