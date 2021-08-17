import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import appTheme  from '../themes/AppTheme'
import HeaderTitle from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme } = useContext(ThemeContext)
  const handleChangeTheme = () => {
    setDarkTheme( )
  }
  return (
    <View style={appTheme.globalMargin} >
      <HeaderTitle title="Themes" />
      <TouchableOpacity onPress={handleChangeTheme} style={styles.button} activeOpacity={0.8} >
        <Text style={styles.buttonText} > Light/Dark </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20
  }
});

export default ChangeThemeScreen
