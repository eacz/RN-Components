import React from 'react'
import { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ListItemSeparator = () => {
  const {theme: { colors: { border } }} = useContext(ThemeContext)
  return (
    <View style={{
      borderColor: border,
      borderBottomWidth: 1, 
      opacity: 0.4, 
      marginVertical: 8
      }} 
    />
  )
}

export default ListItemSeparator
