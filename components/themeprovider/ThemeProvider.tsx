"use client"

import ThemeContext from "@/app/(web)/context/themeContext";
import { useEffect, useState } from "react"

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const themeFromStorages = typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme") 
                            ? JSON.parse(localStorage.getItem("hotel-theme")!)
                            : false;
    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorages);
    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(() => {
        setRenderComponent(true);
    },[]);

    if(!renderComponent) return <></>

    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
                <div className={`dark:text-white dark:bg-black text-black`}>
                    {children}
                </div>
            </div> 
        </ThemeContext.Provider> 
    )
}

export default ThemeProvider