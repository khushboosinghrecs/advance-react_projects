import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme=()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider= ({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme =()=>{
        setIsDarkMode((prevNode) => !prevNode)
    }

    const theme = isDarkMode? 'dark' :'light';

    useEffect(()=>{
        // document.documentElement.setAttribute('dark-theme', theme);
    }, [isDarkMode]);

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}