export type themeType = {
    dark: boolean,
    body: string,
    text: string,
    primary: string,
    secondary: string,
    black: string,
    white: string,
    fade_secondary: string,
    fade: string,
}

export interface ThemeContextType {
    theme?: themeType,
    setTheme?: (theme: themeType) => void,
}