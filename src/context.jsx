import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const getTheme = () => {
    return localStorage.getItem('theme') || 'light';
}
const AppContext = ({ children }) => {
    const [theme, toggleTheme] = useState(getTheme());

    return <GlobalContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext;