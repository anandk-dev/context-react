import React, { useState, type ReactNode } from "react";

interface ThemeContextTypes {
    theme: string,
    toggleTheme:() => void
}
interface ThemeProviderProps {
    children: ReactNode
}
export const ThemeContext = React.createContext<ThemeContextTypes | undefined>(undefined);

const ThemeProvider =({children} : ThemeProviderProps) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider