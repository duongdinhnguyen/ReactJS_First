import React, { useState, createContext } from "react";

const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')
    const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    return (
        <ThemeContext.Provider value={{ theme, handleClick }}>
            { children }
        </ThemeContext.Provider>
    )
}
export {ThemeContext, ThemeProvider}
