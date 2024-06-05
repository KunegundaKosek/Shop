import { createContext, useState } from "react";
import useTheme, { Theme } from "./hooks/useTheme";

type UserPreferencesContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const UserPreferencesContext = createContext<UserPreferencesContextType>({} as UserPreferencesContextType);

type Props = {
    children: React.ReactNode
}
export const UserPreferencesProvider = ({children}: Props) => {

   const { theme, toggleTheme } = useTheme();

    return (
        <UserPreferencesContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </UserPreferencesContext.Provider>
    )
}

export default UserPreferencesProvider;