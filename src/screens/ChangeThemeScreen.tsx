import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import appTheme  from '../themes/AppTheme'
import HeaderTitle from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme: {colors: { primary }} } = useContext(ThemeContext)
  
  return (
    <View style={appTheme.globalMargin} >
      <HeaderTitle title="Themes" />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={setLightTheme} style={{...styles.button, backgroundColor: primary}} activeOpacity={0.8} >
          <Text style={styles.buttonText} > Light </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setDarkTheme} style={{...styles.button, backgroundColor: primary}} activeOpacity={0.8} >
          <Text style={styles.buttonText} > Dark </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
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
    fontSize: 22
  }
});

export default ChangeThemeScreen
