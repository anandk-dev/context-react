import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext.ts";

interface ThemeProviderProps {
    children: ReactNode
}

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