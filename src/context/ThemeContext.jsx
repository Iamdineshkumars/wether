import {  createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const getInitialMode = () =>{
  const preferedDarkMode =  window.matchMedia("(prefers-color-scheme: dark)").matches
  const storedTheme = localStorage.getItem("darkTheme");
  if(storedTheme === null){
    return preferedDarkMode;
  }
  return storedTheme === true;
}
export const ThemeContext =({children})=>{
    const [isDarkMode,setIsDarkMode] = useState(getInitialMode);
    const toogleIcon = ()=>{
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem("darkTheme",newTheme)
    }
    useEffect(()=>{
        document.body.classList.toggle("dark-theme",isDarkMode)
    },[isDarkMode])
    return(
        <AppContext.Provider value={{isDarkMode,toogleIcon}}>
            {children}
        </AppContext.Provider>
    )
}
