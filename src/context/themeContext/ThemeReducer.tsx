import { Theme, DefaultTheme } from '@react-navigation/native';
import { ColorValue } from "react-native";

type actionTypes =
| { type: 'set_light_theme' }
| { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark',
  dividerColor: string,
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: false,
  colors: {
    primary: '#5856D6',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
}
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: true,
  colors: {
    primary: '#7e7cfd',
    background: 'black',
    card: 'grey',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
}

const themeReducer = (state: ThemeState , action: actionTypes): ThemeState => {
    switch(action.type){
      case 'set_light_theme': 
        return {...lightTheme}
      case 'set_dark_theme': 
        return {...darkTheme}
      default: 
        return state
    }
}

export default themeReducer;