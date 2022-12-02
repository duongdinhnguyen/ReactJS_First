import React, { useState, createContext } from "react";

const ThemeContext = createContext()
const ThemeProvider = ({content}) => {
    const [theme, setTheme] = useState('dark')
    console.log(ThemeContext)

    return (
        <ThemeContext.Provider value={theme}>
            {content}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}
