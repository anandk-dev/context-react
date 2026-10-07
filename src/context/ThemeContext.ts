import { createContext } from "react";

interface ThemeContextTypes {
    theme: string,
    toggleTheme:() => void
}

export const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);
