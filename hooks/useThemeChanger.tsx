import React from 'react'
import { useThemeContext } from '../context/ThemeContextProvider'
import { themes } from '../context/Themes'

const useThemeChanger = () => {
  const { theme, setTheme } = useThemeContext()

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light
    setTheme?.(newTheme)
  }

  return { theme, toggleTheme }
}

export default useThemeChanger