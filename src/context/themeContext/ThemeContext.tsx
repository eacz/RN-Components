import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { Appearance, AppState } from "react-native";
import themeReducer, { darkTheme, ThemeState } from './ThemeReducer';
import { lightTheme } from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState,
  setDarkTheme: () => void,
  setLightTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children} :any) => {

  const [theme, dispatch] = useReducer(themeReducer, Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme )
  
  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if(status === 'active'){
        Appearance.getColorScheme() === 'dark' ? setDarkTheme() : setLightTheme() 
      }
    })
  }, [])

  //const colorScheme = useColorScheme()
  //This just works on IOS
  //useEffect(() => {
  //  colorScheme === 'dark' ? setDarkTheme() : setLightTheme() 
  //}, [colorScheme])
  
  const setDarkTheme = () => { 
    dispatch({type: 'set_dark_theme'})
  }
  const setLightTheme = () => {
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