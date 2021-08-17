import React, { createContext, useReducer } from "react";
import themeReducer, { ThemeState } from './ThemeReducer';
import { lightTheme } from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState,
  setDarkTheme: () => void,
  setLightTheme: () => void,
}


export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children} :any) => {
  
  const [theme, dispatch] = useReducer(themeReducer, lightTheme)
  
  const setDarkTheme = () => { 
    console.log('setDarkTheme');
    dispatch({type: 'set_light_theme'})
  }
  const setLightTheme = () => {
    console.log('setDarkTheme')
    dispatch({type: 'set_light_theme'})
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}