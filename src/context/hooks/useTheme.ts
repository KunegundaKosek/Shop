import { useState } from "react";

export type Theme = 'light' | 'dark';

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return {
        theme, toggleTheme
    }
}

export default useTheme;