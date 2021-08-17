import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigation/Stack';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    //primary: 'red',
    //background: 'black',
    //card: 'red',
    //text: 'red',
    //border: 'red',
    //notification: 'red',
  }
}
 
const App = () => {
  return (
    <NavigationContainer theme={customTheme} >
      <StackNavigator />
    </NavigationContainer>
   );
};
export default App;
